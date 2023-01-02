const pluginId = require("../../admin/src/pluginId");

module.exports = [
  {
    method: 'GET',
    path: '/settings',
    handler: 'settingsController.getSettings',
  },
  {
    method: 'PUT',
    path: '/settings',
    handler: 'settingsController.updateSettings',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          config: {
            actions: [`plugin::${pluginId}.settings.manage`],
          },
        },
      ]
    },
  },
];
