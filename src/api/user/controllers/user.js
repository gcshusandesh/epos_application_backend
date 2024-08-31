// src/api/user/controllers/user.js

'use strict';

const crypto = require('crypto');
const bcrypt = require('bcrypt'); // Import bcrypt

// Function to generate a random alphanumeric string
const generateRandomPassword = (length) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

module.exports = {
  async resetPassword(ctx) {
    try {
      const { email } = ctx.request.body;

      if (!email) {
        return ctx.badRequest('Email is required');
      }

      // Find user by email
      const user = await strapi.query('plugin::users-permissions.user').findOne({ where: { email } });

      if (!user) {
        return ctx.badRequest('User not found');
      }

      // Generate a new random alphanumeric password
      const newPassword = generateRandomPassword(8); // You can adjust the length as needed

      // Hash the new password with bcrypt
      const hashedPassword = await bcrypt.hash(newPassword, 10); // 10 is the salt rounds

      // Update user's password
      await strapi.query('plugin::users-permissions.user').update({
        where: { id: user.id },
        data: { password: hashedPassword },
      });

      // Send new password to user's email
      await strapi.plugin('email').service('email').send({
        to: email,
        subject: 'Your New Password',
        text: `Your new password is ${newPassword}`,
      });

      ctx.send({ message: 'New password has been sent to your email' });
    } catch (error) {
      console.error('Error in resetPassword controller:', error); // Log the error
      ctx.internalServerError('An error occurred while processing your request');
    }
  },
};
