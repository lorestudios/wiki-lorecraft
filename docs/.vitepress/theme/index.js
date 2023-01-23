// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './theme.css'

import CustomLayout from './layout/customLayout.vue'
import CustomModal from './components/customModal.vue'
import CustomHero from './components/customHero.vue'
import CustomFeature from './components/customFeature.vue'
import CustomFeatureBox from './components/customFeatureBox.vue'

export default {
  ...DefaultTheme,
  Layout: CustomLayout,

  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)

    // register your custom global components
    ctx.app.component('CustomModal', CustomModal)
    ctx.app.component('CustomHero', CustomHero)
    ctx.app.component('CustomFeature', CustomFeature)
    ctx.app.component('CustomFeatureBox', CustomFeatureBox)
  }
}