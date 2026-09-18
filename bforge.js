let BFORGE;

function bforgeInspectViewport() {
	return {
		canvas: typeof Canvas !== 'undefined',
		three: typeof THREE !== 'undefined',
		preview: typeof Preview !== 'undefined'
	};
}

function bforgeApplyAppearanceLayer() {
	// Safe first-pass hook.
	// Real shading/material changes will be added after confirming
	// the exposed Blockbench rendering API.
	if (typeof Canvas !== 'undefined' && typeof Canvas.updateView === 'function') {
		Canvas.updateView();
	}

	console.log('[BFORGE] Appearance layer active');
}

Plugin.register('bforge', {
	title: 'BFORGE',
	author: 'yamasung7-dot',
	icon: 'icon.png',
	description: 'Blender-inspired viewport enhancement foundation for Blockbench',
	version: '0.0.4',
	variant: 'both',
	min_version: '4.8.0',

	onload() {
		BFORGE = {
			enabled: true,
			version: '0.0.4',
			viewport: bforgeInspectViewport()
		};

		console.log('[BFORGE] Core loaded', BFORGE.viewport);
		bforgeApplyAppearanceLayer();
	},

	onunload() {
		BFORGE = undefined;
		console.log('[BFORGE] Core unloaded');
	}
});
