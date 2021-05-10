import { importModule } from "./import-module.js";
import { fetchAsset } from "./fetch-asset.js";


export const prefetch = async (assets) => {
	if (!window.$app) window.$app = {};
	if (!window.$app.prefetchedAssets) window.$app.prefetchedAssets = {};
	
	const fetchOne = async ({ id, type, name, props, collection, src, construct }) => {
		const asset = (
			type === "module"
			? await importModule(src, { name, construct, props })
			: await fetchAsset(src, type)
		);

		if (!window.$app.prefetchedAssets[collection]) window.$app.prefetchedAssets[collection] = {};
		window.$app.prefetchedAssets[collection][id] = asset;
		return asset;
	};
	
	return Promise.all(assets.map(asset => fetchOne(asset)));
};