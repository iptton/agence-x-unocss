// uno.config.ts
import {
    defineConfig, presetAttributify, presetIcons, presetUno, presetMini, presetWebFonts
} from 'unocss'
import presetAnimations from 'unocss-preset-animations'

import presetDaisy from '@vsilk/unocss-preset-daisyui'
  
  import transformerDirectives from '@unocss/transformer-directives'
  
  export default defineConfig({
    transformers: [
      transformerDirectives(),
    ],
    presets: [
      presetUno(),
      presetAttributify(),
      presetMini({
        dark: "class"
      }),
      presetWebFonts({
        provider: "none",
        fonts: {
          dms: ["'DM Sans'", 'sans-serif'],
        },
      }),
      presetIcons(
        {
          collections: {
            // carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
          }
        }
      ),
      presetAnimations(),
      presetDaisy({
          themes: ["lemonade", "dark"],
      }),
    ],
  })