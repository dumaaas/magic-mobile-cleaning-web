import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _66bb8aba = () => interopDefault(import('..\\pages\\aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _a3396716 = () => interopDefault(import('..\\pages\\beforeafter.vue' /* webpackChunkName: "pages/beforeafter" */))
const _56413958 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _3edc4556 = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
const _1e2885ec = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutus",
    component: _66bb8aba,
    name: "aboutus"
  }, {
    path: "/beforeafter",
    component: _a3396716,
    name: "beforeafter"
  }, {
    path: "/contact",
    component: _56413958,
    name: "contact"
  }, {
    path: "/services",
    component: _3edc4556,
    name: "services"
  }, {
    path: "/",
    component: _1e2885ec,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
