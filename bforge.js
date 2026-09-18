Plugin.register('bforge', {
	title: 'BFORGE',
	author: 'yamasung7-dot',
	icon: 'icon.png',
	description: 'Blender-inspired viewport enhancement foundation for Blockbench',
	version: '0.0.1',
	variant: 'both',
	min_version: '4.8.0',

	onload() {
		console.log('[BFORGE] Foundation loaded');

		BFORGE = {
			enabled: true,
			version: '0.0.1'
		};

		// First prototype: safe initialization only.
		// Viewport enhancement hooks will be added after API testing.
	},

	onunload() {
		if (typeof BFORGE !== 'undefined') {
			delete BFORGE;
		}

		console.log('[BFORGE] Foundation unloaded');
	}
});