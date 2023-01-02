'use strict';

const pluginId = require('../../admin/src/pluginId.js');

module.exports = ({ strapi }) => {
  const settingsService = strapi.plugins[pluginId].services.settings;

  const getSettings = async (ctx) => {
    try {
      const settings = await settingsService.getSettings();
      ctx.send(settings)
    } catch (err) {
      ctx.throw(500, err);
    }
  };

  const updateSettings = async (ctx) => {
    try {
      const newSettings = ctx.request.body
      await settingsService.setSettings(newSettings);
      ctx.send({res: 'ok'})
    } catch (err) {
      ctx.throw(500, err);
    }
  };

  return {
    getSettings,
    updateSettings,
  }
};
