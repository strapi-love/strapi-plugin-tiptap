import Wysiwyg from "./components/Wysiwyg";
import pluginId from "./pluginId";

import pluginPermissions from './permissions';

const myComponent = async () => {
  const component = await import(
    /* webpackChunkName: "tiptip-editor-settings-page" */ './pages/App'
  );

  return component;
};

export default {
  register(app) {
    app.createSettingSection(
      { id: pluginId, intlLabel: { id: `${pluginId}.settings-section.title`, defaultMessage: 'TipTap Editor' } }, // Section to create
      [
        // links
        {
          intlLabel: { id: `${pluginId}.settings-section.settings`, defaultMessage: 'Settings' },
          id: 'Settings',
          to: `/settings/${pluginId}`,
          Component: myComponent,
          permissions: pluginPermissions.settings,
        },
      ]
    );

    app.addFields({ type: 'wysiwyg', Component: Wysiwyg });

    app.registerPlugin({
      id: pluginId,
      isReady: true,
      name: pluginId,
    });
  },
  bootstrap() {},
};
