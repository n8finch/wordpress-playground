/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	mainSidebar: [
		{
			type: 'category',
			label: 'Documentation',
			link: {
				type: 'doc',
				id: 'main/introduction',
			},
			items: [
				'main/quick-start-guide',
				'main/web-instance',
				{
					type: 'category',
					label: 'About Playground',
					link: {
						type: 'doc',
						id: 'main/about/index',
					},
					items: [
						'main/about/build',
						'main/about/test',
						'main/about/launch',
					],
				},
				{
					type: 'category',
					label: 'Guides',
					link: {
						type: 'doc',
						id: 'main/guides/index',
					},
					items: [
						'main/guides/wordpress-native-ios-app',
						'main/guides/for-plugin-developers',
						'main/guides/for-theme-developers',
						'main/guides/providing-content-for-your-demo'
					],
				},
				{
					type: 'category',
					label: 'Contributing',
					link: {
						type: 'doc',
						id: 'main/contributing/introduction',
					},
					items: [
						'main/contributing/code',
						'main/contributing/coding-standards',
						'main/contributing/contributor-day',
						'main/contributing/documentation',
					],
				},
				'main/resources',
				'main/changelog',
			],
		},
	],
	blueprintsSidebar: [
		{
			type: 'category',
			label: 'Blueprints',
			link: {
				type: 'doc',
				id: 'blueprints/introduction',
			},
			items: [
				'blueprints/index',
				{
					type: 'category',
					label: 'Tutorial',
					link: {
						type: 'doc',
						id: 'blueprints/tutorial/index',
					},

					items: [
						'blueprints/tutorial/what-are-blueprints-what-you-can-do-with-them',
						'blueprints/tutorial/how-to-load-run-blueprints',
						'blueprints/tutorial/build-your-first-blueprint',
					],
				},
				'blueprints/data-format',
				'blueprints/using-blueprints',
				{
					type: 'category',
					label: 'Steps',
					link: {
						type: 'doc',
						id: 'blueprints/steps',
					},

					items: [
						'blueprints/resources',
						'blueprints/steps-shorthands',
						'blueprints/json-api-and-function-api',
					],
				},

				'blueprints/examples',
				'blueprints/troubleshoot-and-debug-blueprints',
			],
		},
	],
	developersSidebar: [
		{
			type: 'category',
			label: 'Developers',
			link: {
				type: 'doc',
				id: 'developers/intro',
			},
			items: [
				'developers/build-an-app/index',
				{
					type: 'category',
					label: 'Local Development',
					link: {
						type: 'doc',
						id: 'developers/local-development/intro',
					},
					items: [
						'developers/local-development/wp-now',
						'developers/local-development/vscode-extension',
						'developers/local-development/php-wasm-node',
					],
				},
				{
					type: 'category',
					label: 'Playground APIs',
					link: {
						type: 'doc',
						id: 'developers/apis/index',
					},
					items: [
						'developers/apis/query-api/index',
						{
							type: 'category',
							label: 'Javascript API',
							link: {
								type: 'doc',
								id: 'developers/apis/javascript-api/index',
							},
							items: [
								'developers/apis/javascript-api/playground-api-client',
								'developers/apis/javascript-api/index-html-vs-remote-html',
								'developers/apis/javascript-api/blueprint-json-in-api-client',
								'developers/apis/javascript-api/blueprint-functions-in-api-client',
								'developers/apis/javascript-api/mount-data',
							],
						},
					],
				},
				{
					type: 'category',
					label: 'Architecture',
					link: {
						type: 'doc',
						id: 'developers/architecture/index',
					},
					items: [
						'developers/architecture/wasm-php-overview',
						'developers/architecture/wasm-php-compiling',
						'developers/architecture/wasm-php-javascript-module',
						'developers/architecture/wasm-php-filesystem',
						'developers/architecture/wasm-php-data-dependencies',
						'developers/architecture/wasm-asyncify',
						'developers/architecture/browser-concepts',
						'developers/architecture/browser-tab-orchestrates-execution',
						'developers/architecture/browser-iframe-rendering',
						'developers/architecture/browser-php-worker-threads',
						'developers/architecture/browser-service-workers',
						'developers/architecture/browser-scopes',
						'developers/architecture/browser-cross-process-communication',
						'developers/architecture/wordpress',
						'developers/architecture/wordpress-database',
						'developers/architecture/browser-wordpress',
						'developers/architecture/host-your-own-playground',
					],
				},
				'developers/limitations/index',
			],
		},
	],
};

// {
// 	// By default, Docusaurus generates a sidebar from the docs folder structure
// 	tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],
//   blueprintSidebar: [{ type: 'autogenerated', dirName: '../blueprint' }],
//   developersSidebar: [{ type: 'autogenerated', dirName: 'developers' }],
// };

module.exports = sidebars;
