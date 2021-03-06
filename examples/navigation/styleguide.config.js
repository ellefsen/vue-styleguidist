const path = require('path');

module.exports = {
	title: 'Vue Style Guide Example',
	navigation: true,
	sections: [
		{
			name: 'Documentation',
			content: 'docs/Documentation.md',
			sections: [
				{
					name: 'Files',
					content: 'docs/Files.md',
					sections: [
						{
							name: 'First',
							content: 'docs/One.md',
							description: 'This is the first section description',
						},
						{
							name: 'Second File',
							content: 'docs/Two.md',
						},
					],
				},
			],
		},
		{
			name: 'Components',
			components: () => [
				'./src/components/Label/Label.vue',
				'./src/components/Placeholder/Placeholder.vue',
			],
		},
	],
	require: [path.join(__dirname, 'src/styles.css')],
	defaultExample: true,
	webpackConfig: env => ({
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
			],
		},
		performance:
			env === 'development'
				? false
				: {
						maxAssetSize: 685000, // bytes
						maxEntrypointSize: 685000, // bytes
						hints: 'error',
					},
	}),
};
