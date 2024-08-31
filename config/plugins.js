// ./config/plugins.js

module.exports = {
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.mailersend.net', // MailerSend SMTP server
        port: 587, // Port for TLS
        secure: false, // Use TLS (false for port 587, true for port 465)
        auth: {
          user: process.env.EMAIL_PROVIDER_USER, // MailerSend SMTP username
          pass: process.env.EMAIL_PROVIDER_PASS, // MailerSend SMTP password
        },
      },
      settings: {
        defaultFrom: 'no-reply@restaurantepos.xyz', // Default sender email address
        defaultReplyTo: 'no-reply@restaurantepos.xyz', // Default reply-to email address
      },
    },
  },
};
