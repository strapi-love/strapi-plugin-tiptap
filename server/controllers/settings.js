'use strict';

const pluginId = require('../../admin/src/pluginId.js');

const defaultSettings = require('../../utils/defaults.js')


module.exports = {
  async getSettings(ctx) {
    const savedSettings = await strapi.store({type: 'plugin', name: pluginId, key: 'settings'}).get()
    if (savedSettings !== null) {
      ctx.send(savedSettings)
    } else {
      ctx.send(defaultSettings)
    }
  },
  async updateSettings(ctx) {
    const newSettings = ctx.request.body
    await strapi.store({type: 'plugin', name: pluginId, key: 'settings'}).set({value: newSettings})
    ctx.send({res: 'ok'})
  },

};
