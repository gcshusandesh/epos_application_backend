// src/api/user/routes/user.js

'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/users/reset-password',
      handler: 'user.resetPassword',
      config: {
        auth: false,
      },
    },
  ],
};
