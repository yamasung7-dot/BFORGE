let BFORGE;

function bforgeRefreshViewport() {
	// Safe placeholder hook.
	// Actual viewport enhancement will be added after confirming Blockbench APIs.
	if (typeof Canvas !== 'undefined' && Canvas.updateView) {
		Canvas.updateView();
	}
}

Plugin.register('bforge', {
	title: 'BFORGE',
	author: 'yamasung7-dot',
	icon: 'icon.png',
	description: 'Blender-inspired viewport enhancement foundation for Blockbench',
	version: '0.0.2',
	variant: 'both',
	min_version: '4.8.0',

	onload() {
		BFORGE = {
			enabled: true,
			version: '0.0.2',
			refresh: bforgeRefreshViewport
		};

		console.log('[BFORGE] Core loaded');
		bforgeRefreshViewport();
	},

	onunload() {
		if (BFORGE) {
			BFORGE.enabled = false;
			BFORGE = undefined;
		}

		console.log('[BFORGE] Core unloaded');
	}
});
