/* eslint-disable no-console */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-undef
const path = require('path');
const { CracoAliasPlugin, configPaths } = require('react-app-rewire-alias');
const aliasMap = configPaths('./tsconfig.paths.json');
module.exports = {
	webpack: {
		configure: (config) => {
			const scopePluginIndex = config.resolve.plugins.findIndex(
				({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin',
			);
			config.resolve.plugins.splice(scopePluginIndex, 1);
			config.resolve = {
				...config.resolve,

				alias: {
					'@common': path.resolve(__dirname, 'swagger-to-typescript/src/'),
					'@src': path.resolve(__dirname, 'src/'),
				},
			};
			return config;
		},
	},
	plugins: [
		
		{
			plugin: CracoAliasPlugin,
			options: { alias: aliasMap },
		},
	],
};
