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

	return info;
}

function bforgeAppearanceExperiment() {
	const capabilities = bforgeProbeRendering();

	BFORGE.rendering = capabilities;

	// First experiment only refreshes the viewport.
	// No materials or meshes are modified yet.
	if (typeof Canvas !== 'undefined' && typeof Canvas.updateView === 'function') {
		Canvas.updateView();
	}

	console.log('[BFORGE] Appearance experiment complete', capabilities);
}

Plugin.register('bforge', {
	title: 'BFORGE',
	author: 'yamasung7-dot',
	icon: 'icon.png',
	description: 'Blender-inspired viewport enhancement foundation for Blockbench',
	version: '0.0.7',
	variant: 'both',
	min_version: '4.8.0',

	onload() {
		BFORGE = {
			enabled: true,
			version: '0.0.7',
			viewport: bforgeInspectViewport(),
			rendering: {}
		};

		console.log('[BFORGE] Core loaded', BFORGE.viewport);
		bforgeAppearanceExperiment();
	},

	onunload() {
		BFORGE = undefined;
		console.log('[BFORGE] Core unloaded');
	}
});
