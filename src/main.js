// article
import Article from './components/article/Article'

// badge
import Badge from './components/badge/Badge'

// cells
import CellsTitle from './components/cells/CellsTitle'
import Cells from './components/cells/Cells'
import Cell from './components/cells/cell/Cell'
import CellHeader from './components/cells/cell/CellHeader'
import CellBody from './components/cells/cell/CellBody'
import CellFooter from './components/cells/cell/CellFooter'

// flex
import Flex from './components/flex/Flex'
import FlexItem from './components/flex/FlexItem'

// grids
import Grids from './components/grids/Grids'
import Grid from './components/grids/grid/Grid'
import GridIcon from './components/grids/grid/GridIcon'
import GridLabel from './components/grids/grid/GridLabel'

// icon
import Icon from './components/icon/Icon'

// media-box
import MediaBox from './components/mediabox/MediaBox'
import MediaBoxHeader from './components/mediabox/MediaBoxHeader'
import MediaBoxBody from './components/mediabox/MediaBoxBody'
import MediaBoxTitle from './components/mediabox/MediaBoxTitle'
import MediaBoxDesc from './components/mediabox/MediaBoxDesc'
import MediaBoxInfo from './components/mediabox/MediaBoxInfo'
import MediaBoxInfoMeta from './components/mediabox/MediaBoxInfoMeta'

// navbar
import Navbar from './components/navbar/Navbar'
import NavbarItem from './components/navbar/item/NavbarItem'

// panel
import Panel from './components/panel/Panel'
import PanelHeader from './components/panel/PanelHeader'
import PanelBody from './components/panel/PanelBody'
import PanelFooter from './components/panel/PanelFooter'

// preview
import Preview from './components/preview/Preview'
import PreviewHeader from './components/preview/PreviewHeader'
import PreviewBody from './components/preview/PreviewBody'
import PreviewFooter from './components/preview/PreviewFooter'
import PreviewLabel from './components/preview/PreviewLabel'
import PreviewValue from './components/preview/PreviewValue'
import PreviewBtn from './components/preview/PreviewBtn'

// tab
import Tab from './components/tab/Tab'
import TabPanel from './components/tab/TabPanel'

// tabbar
import Tabbar from './components/tabbar/Tabbar'
import TabbarItem from './components/tabbar/item/TabbarItem'
import TabbarIcon from './components/tabbar/item/TabbarIcon'
import TabbarLabel from './components/tabbar/item/TabbarLabel'

const VueWeuiComponents = {
  // article
  Article,
  // badge
  Badge,
  // cells
  CellsTitle,
  Cells,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  // flex
  Flex,
  FlexItem,
  // grids
  Grids,
  Grid,
  GridIcon,
  GridLabel,
  // icon
  Icon,
  // media-box
  MediaBox,
  MediaBoxHeader,
  MediaBoxBody,
  MediaBoxTitle,
  MediaBoxDesc,
  MediaBoxInfo,
  MediaBoxInfoMeta,
  // navbar
  Navbar,
  NavbarItem,
  // panel
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  // preview
  Preview,
  PreviewHeader,
  PreviewBody,
  PreviewFooter,
  PreviewLabel,
  PreviewValue,
  PreviewBtn,
  // tab
  Tab,
  TabPanel,
  // tabbar
  Tabbar,
  TabbarItem,
  TabbarIcon,
  TabbarLabel,
}

const VueWeui = {
  install (Vue, options) {
    for (let [key, value] of Object.entries(VueWeuiComponents)) {
      Vue.component(`Weui${key}`, value)
    }
  },
  VueWeuiComponents,
}

export default VueWeui

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueWeui)
}
