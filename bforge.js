let BFORGE;

function bforgeInspectViewport() {
	return {
		canvas: typeof Canvas !== 'undefined',
		three: typeof THREE !== 'undefined',
		preview: typeof Preview !== 'undefined'
	};
}

function bforgeProbeRendering() {
	const info = {
		materials: false,
		meshes: false,
		lighting: false
	};

	if (typeof THREE !== 'undefined') {
		info.materials = typeof THREE.MeshStandardMaterial !== 'undefined';
		info.meshes = typeof THREE.Mesh !== 'undefined';
		info.lighting = typeof THREE.Light !== 'undefined';
	}

	console.log('[BFORGE] Rendering capabilities:', info);
	return info;
}

function bforgeApplyAppearanceLayer() {
	BFORGE.rendering = bforgeProbeRendering();

	// Safe appearance test stage.
	// Actual material/shading changes will only be added after confirming
	// the correct Blockbench rendering hooks.
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
	version: '0.0.6',
	variant: 'both',
	min_version: '4.8.0',

	onload() {
		BFORGE = {
			enabled: true,
			version: '0.0.6',
			viewport: bforgeInspectViewport(),
			rendering: {}
		};

		console.log('[BFORGE] Core loaded', BFORGE.viewport);
		bforgeApplyAppearanceLayer();
	},

	onunload() {
		BFORGE = undefined;
		console.log('[BFORGE] Core unloaded');
	}
});
