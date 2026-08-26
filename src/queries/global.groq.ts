import { bodyQuery } from './helper';

export default `{
  "settings": *[_type == "settings"][0] {
    title,
    legalTitle,
    legalInfo,
    email,
    linkedInUrl,
    instagramUrl,
    seo{
      ...,
      image{..., asset->},
    },
  },
  "home": *[_type == "home"][0] {
    "navigation": modules[]{
      _key,
      title,
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
