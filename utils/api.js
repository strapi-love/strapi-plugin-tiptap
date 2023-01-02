import {request} from '@strapi/helper-plugin';

const pluginId = require('../admin/src/pluginId.js');

export function getSettings () {
  return request(`${process.env.STRAPI_ADMIN_BACKEND_URL}/${pluginId}/settings`)
}

export function updateSettings (settings) {
  return request(`${process.env.STRAPI_ADMIN_BACKEND_URL}/${pluginId}/settings`, {method: 'PUT', body: settings })
}
