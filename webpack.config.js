module.exports = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx|mjs|ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					// We can't use esbuild-loader cuz its cannot integrate with React-Refresh.
					'thread-loader',
					{
						loader: 'babel-loader',
						options: {},
					},
					{
						loader: '@linaria/webpack-loader',
						options: { sourceMap: true },
					},
				],
			},
		],
	},
};
