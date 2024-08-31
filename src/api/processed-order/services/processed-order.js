'use strict';

/**
 * processed-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::processed-order.processed-order');
