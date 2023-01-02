const pluginId = require('../../admin/src/pluginId.js');

const pluginPermissions = {
    settings: [
        { action: `plugin::${pluginId}.settings.manage`, subject: null },
    ],
  };
  
  export default pluginPermissions;