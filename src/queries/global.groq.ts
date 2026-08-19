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
    introText[]{${bodyQuery}},
    modules[]{
      ...,
      image{..., asset->},
      body[]{${bodyQuery}},
    },
  },
}`;
