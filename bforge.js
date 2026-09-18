let BFORGE;

function bforgeInspectViewport() {
	const state = {
		canvas: typeof Canvas !== 'undefined',
		three: typeof THREE !== 'undefined'
	};

	console.log('[BFORGE] Viewport inspection:', state);
	return state;
}

function bforgeRefreshViewport() {
	if (typeof Canvas !== 'undefined' && typeof Canvas.updateView === 'function') {
		Canvas.updateView();
	}
}

Plugin.register('bforge', {
	title: 'BFORGE',
	author: 'yamasung7-dot',
	icon: 'icon.png',
	description: 'Blender-inspired viewport enhancement foundation for Blockbench',
	version: '0.0.3',
	variant: 'both',
	min_version: '4.8.0',

	onload() {
		BFORGE = {
			enabled: true,
			version: '0.0.3',
			viewport: bforgeInspectViewport()
		};

		console.log('[BFORGE] Core loaded');
		bforgeRefreshViewport();
	},

	onunload() {
		BFORGE = undefined;
		console.log('[BFORGE] Core unloaded');
	}
});
