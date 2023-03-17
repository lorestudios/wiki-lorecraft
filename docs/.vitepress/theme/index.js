// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './theme.css'

import CustomLayout from './layout/customLayout.vue'
import CustomModal from './components/customModal.vue'
import CustomHero from './components/customHero.vue'
import CustomFeature from './components/customFeature.vue'
import CustomFeatureBox from './components/customFeatureBox.vue'
import CustomCta from './components/customCta.vue'
import CustomImage from './components/customImage.vue'
import CustomCode from './components/customCode.vue'
import CustomCarousel from './components/customCarousel.vue'
import CustomProductGrid from './components/customProductGrid.vue'
import CustomProductItem from './components/customProductItem.vue'
import CustomProductFeature from './components/customProductFeature.vue'
import CustomProductFeatureBox from './components/customProductFeatureBox.vue'

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
    ctx.app.component('CustomCta', CustomCta)
    ctx.app.component('CustomImage', CustomImage)
    ctx.app.component('cc', CustomCode)
    ctx.app.component('CustomCarousel', CustomCarousel)
    ctx.app.component('CustomProductGrid', CustomProductGrid)
    ctx.app.component('CustomProductItem', CustomProductItem)
    ctx.app.component('CustomProductFeature', CustomProductFeature)
    ctx.app.component('CustomProductFeatureBox', CustomProductFeatureBox)    
  }
}