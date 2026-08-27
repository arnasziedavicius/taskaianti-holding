const pathSelect = `
	reference->_type == "home" => "/",
	reference->_type == "projectsEntry" => "/projects/" + reference->slug.current,
	"/" + reference->_type,
`;

export const linkInternalQuery = `
	_key,
	"linkType": "linkInternal",
	"title": coalesce(title, reference->title),
	hash,
	"path": select(
		${pathSelect}
	),
`;

export const linkExternalQuery = `
	_key,
	"linkType": "linkExternal",
	"title": coalesce(title, "Read more"),
	newWindow,
	url,
`;

export const linkQuery = `
	_type == "linkInternal" => {
		${linkInternalQuery}
	},
	_type == "linkExternal" => {
		${linkExternalQuery}
	},
`;

export const bodyQuery = `
	...,
	markDefs[]{
		...,
		_type == "annotationLinkInternal" => {
			${linkInternalQuery}
		},
		_type == "annotationLinkExternal" => {
			${linkExternalQuery}
		},
		_type == "annotationLinkDownload" => {
			_key,
			"url": file.asset->url,
			"filename": file.asset->originalFilename,
		},
	},
	links[]{
		${linkQuery}
	},
	image{..., asset->},
`;
