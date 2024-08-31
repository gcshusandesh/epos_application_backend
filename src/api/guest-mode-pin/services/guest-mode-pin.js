'use strict';

/**
 * guest-mode-pin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guest-mode-pin.guest-mode-pin');
