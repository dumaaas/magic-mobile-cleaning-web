export const ContactForm = () => import('../..\\components\\ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c))
export const ContactInfo = () => import('../..\\components\\ContactInfo.vue' /* webpackChunkName: "components/contact-info" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const PageHeading = () => import('../..\\components\\PageHeading.vue' /* webpackChunkName: "components/page-heading" */).then(c => wrapFunctional(c.default || c))
export const ServicesCover = () => import('../..\\components\\ServicesCover.vue' /* webpackChunkName: "components/services-cover" */).then(c => wrapFunctional(c.default || c))
export const ServicesInfo = () => import('../..\\components\\ServicesInfo.vue' /* webpackChunkName: "components/services-info" */).then(c => wrapFunctional(c.default || c))
export const SocialIcons = () => import('../..\\components\\SocialIcons.vue' /* webpackChunkName: "components/social-icons" */).then(c => wrapFunctional(c.default || c))
export const Track = () => import('../..\\components\\Track.vue' /* webpackChunkName: "components/track" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
