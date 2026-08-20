import { bodyQuery } from './helper';

export default `{
  "settings": *[_type == "settings"][0] {
    title,
    seo{
      ...,
      image{..., asset->},
    },
  },
  "home": *[_type == "home"][0] {
    "navigation": modules[]{
      _key,
      heading,
      slug,
    },
    introText[]{${bodyQuery}},
    modules[]{
      ...,
      image{..., asset->},
      body[]{${bodyQuery}},
    },
  },
}`;
