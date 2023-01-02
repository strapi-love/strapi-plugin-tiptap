'use strict';

const pluginId = require('../../admin/src/pluginId.js');
const defaultSettings = require('../../utils/defaults.js')

module.exports = ({ strapi }) => ({
  async getSettings() {
    const savedSettings = await strapi.store({type: 'plugin', name: pluginId, key: 'settings'}).get()
    
    return savedSettings ?? defaultSettings;
  },

  async setSettings(newSettings) {
    await strapi.store({type: 'plugin', name: pluginId, key: 'settings'}).set({value: newSettings})
  }
});
