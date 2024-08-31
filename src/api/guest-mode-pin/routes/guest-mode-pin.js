'use strict';

/**
 * guest-mode-pin router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::guest-mode-pin.guest-mode-pin');
