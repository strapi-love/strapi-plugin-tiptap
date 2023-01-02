'use strict';

const pluginId = require("../admin/src/pluginId");

module.exports = async ({ strapi }) => {
  // Add permissions
  const actions = [
    {
      section: 'settings',
      category: 'TipTap Editor',
      displayName: 'Manage TipTap Settings',
      uid: `settings.manage`,
      pluginName: pluginId,
    },
  ];

  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
