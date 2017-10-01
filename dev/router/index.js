import Vue from 'vue'
import Router from 'vue-router'

// home
// import Home from '../views/Home'

// demo
import Demo from '../views/demo/Demo'
import ActionSheet from '../views/demo/actionsheet/ActionSheet'
import Article from '../views/demo/article/Article'
import Badge from '../views/demo/badge/Badge'
import Button from '../views/demo/button/Button'
import Cells from '../views/demo/cells/Cells'
import Flex from '../views/demo/flex/Flex'
import Grids from '../views/demo/grids/Grids'
import Icon from '../views/demo/icon/Icon'

// about
import About from '../views/about/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'home',
      // component: Home
      redirect: {
        name: 'demo',
      }
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
