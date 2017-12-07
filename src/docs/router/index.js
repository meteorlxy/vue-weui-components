import Vue from 'vue'
import Router from 'vue-router'

// home
import Home from '../views/home/Home'

// demo
import Demo from '../views/demo/Demo'
import ActionSheet from '../views/demo/actionsheet/ActionSheet'
import Article from '../views/demo/article/Article'
import Badge from '../views/demo/badge/Badge'
import Button from '../views/demo/button/Button'
import Cells from '../views/demo/cells/Cells'
import Dialog from '../views/demo/dialog/Dialog'
import Flex from '../views/demo/flex/Flex'
import Footer from '../views/demo/footer/Footer'
import Gallery from '../views/demo/gallery/Gallery'
import Grids from '../views/demo/grids/Grids'
import Icon from '../views/demo/icon/Icon'
import Input from '../views/demo/input/Input'
import Loadmore from '../views/demo/loadmore/Loadmore'
import Msg from '../views/demo/msg/Msg'

// about
import About from '../views/about/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home',
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/demo',
      component: Demo,
      name: 'demo',
      redirect: {
        name: 'demo.article',
      },
      children: [
        {
          path: 'actionsheet',
          name: 'demo.actionsheet',
          component: ActionSheet,
          meta: {
            title: 'ActionSheet',
            offical: {
              weui: 'https://weui.io/#actionsheet',
              github: 'https://github.com/Tencent/weui/wiki/ActionSheet',
            },
            mine: {
              demo_source_code: 'https://github.com/meteorlxy/vue-weui-components/blob/master/src/docs/views/demo/actionsheet/ActionSheet.vue'
            },
          },
        },
        {
          path: 'article',
          name: 'demo.article',
          component: Article,
          meta: {
            title: 'Article',
            offical: {
              weui: 'https://weui.io/#article',
              github: 'https://github.com/Tencent/weui/wiki/Article',
            },
            mine: {
              demo_source_code: 'https://github.com/meteorlxy/vue-weui-components/blob/master/src/docs/views/demo/article/Article.vue'
            },
          },
        },
        {
          path: 'badge',
          name: 'demo.badge',
          component: Badge,
          meta: {
            title: 'Badge',
            offical: {
              weui: 'https://weui.io/#badge',
              github: 'https://github.com/Tencent/weui/wiki/Badge',
            },
            mine: {
              demo_source_code: 'https://github.com/meteorlxy/vue-weui-components/blob/master/src/docs/views/demo/badge/Badge.vue'
            },
          },
        },
        {
          path: 'button',
          name: 'demo.button',
          component: Button,
          meta: {
            title: 'Button',
            offical: {
              weui: 'https://weui.io/#button',
              github: 'https://github.com/Tencent/weui/wiki/Button',
            },
            mine: {
              demo_source_code: 'https://github.com/meteorlxy/vue-weui-components/blob/master/src/docs/views/demo/button/Button.vue'
            },
          },
        },
        {
          path: 'cells',
          name: 'demo.cells',
          component: Cells,
          meta: {
            title: 'Cells',
            offical: {
              weui: 'https://weui.io/#cells',
              github: 'https://github.com/Tencent/weui/wiki/Cell',
            },
            mine: {
              demo_source_code: 'https://github.com/meteorlxy/vue-weui-components/blob/master/src/docs/views/demo/cells/Cells.vue'
            },
          },
        },
        {
          path: 'dialog',
          name: 'demo.dialog',
          component: Dialog,
          meta: {
            title: 'Dialog',
            offical: {
              weui: 'https://weui.io/#dialog',
              github: 'https://github.com/Tencent/weui/wiki/Dialog',
            },
            mine: {
              demo_source_code: 'https://github.com/meteorlxy/vue-weui-components/blob/master/src/docs/views/demo/dialog/Dialog.vue'
            },
          },
        },
        {
          path: 'flex',
          name: 'demo.flex',
          component: Flex,
          meta: {
            title: 'Flex',
            offical: {
              github: 'https://github.com/Tencent/weui/wiki/Flex',
            },
            mine: {
              demo_source_code: 'https://github.com/meteorlxy/vue-weui-components/blob/master/src/docs/views/demo/flex/Flex.vue'
            },
          },
        },
        {
          path: 'footer',
          name: 'demo.footer',
          component: Footer,
          meta: {
            title: 'Footer',
            offical: {
              weui: 'https://weui.io/#footer',
              github: 'https://github.com/Tencent/weui/wiki/Footer',
            },
            mine: {
              demo_source_code: 'https://github.com/meteorlxy/vue-weui-components/blob/master/src/docs/views/demo/footer/Footer.vue'
            },
          },
        },
        {
          path: 'gallery',
          name: 'demo.gallery',
          component: Gallery,
          meta: {
            title: 'Gallery',
            offical: {
              weui: 'https://weui.io/#gallery',
              github: 'https://github.com/Tencent/weui/wiki/Gallery',
            },
            mine: {
              demo_source_code: 'https://github.com/meteorlxy/vue-weui-components/blob/master/src/docs/views/demo/gallery/Gallery.vue'
            },
          },
        },
        {
          path: 'grids',
          name: 'demo.grids',
          component: Grids,
          meta: {
            title: 'Grids',
            offical: {
              weui: 'https://weui.io/#grid',
              github: 'https://github.com/Tencent/weui/wiki/Grid',
            },
            mine: {
              demo_source_code: 'https://github.com/meteorlxy/vue-weui-components/blob/master/src/docs/views/demo/grids/Grids.vue'
            },
          },
        },
        {
          path: 'icon',
          name: 'demo.icon',
          component: Icon,
          meta: {
            title: 'Icon',
            offical: {
              weui: 'https://weui.io/#icons',
              github: 'https://github.com/Tencent/weui/wiki/Icon',
            },
            mine: {
              demo_source_code: 'https://github.com/meteorlxy/vue-weui-components/blob/master/src/docs/views/demo/icon/Icon.vue'
            },
          },
        },
        {
          path: 'input',
          name: 'demo.input',
          component: Input,
          meta: {
            title: 'Input',
            offical: {
              weui: 'https://weui.io/#input',
              github: 'https://github.com/Tencent/weui/wiki/Input',
            },
            mine: {
              demo_source_code: 'https://github.com/meteorlxy/vue-weui-components/blob/master/src/docs/views/demo/input/Input.vue'
            },
          },
        },
        {
          path: 'loadmore',
          name: 'demo.loadmore',
          component: Loadmore,
          meta: {
            title: 'Loadmore',
            offical: {
              weui: 'https://weui.io/#loadmore',
              github: 'https://github.com/Tencent/weui/wiki/Loadmore',
            },
            mine: {
              demo_source_code: 'https://github.com/meteorlxy/vue-weui-components/blob/master/src/docs/views/demo/loadmore/Loadmore.vue'
            },
          },
        },
        {
          path: 'msg',
          name: 'demo.msg',
          component: Msg,
          meta: {
            title: 'Msg',
            offical: {
              weui: 'https://weui.io/#msg',
              github: 'https://github.com/Tencent/weui/wiki/Msg-Page',
            },
            mine: {
              demo_source_code: 'https://github.com/meteorlxy/vue-weui-components/blob/master/src/docs/views/demo/msg/Msg.vue'
            },
          },
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    }
  ]
})
