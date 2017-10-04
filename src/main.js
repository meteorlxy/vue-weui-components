// actionsheet
import ActionSheet from './components/actionsheet/ActionSheet'
import ActionSheetTitle from './components/actionsheet/ActionSheetTitle'
import ActionSheetMenu from './components/actionsheet/ActionSheetMenu'
import ActionSheetAction from './components/actionsheet/ActionSheetAction'
import ActionSheetCell from './components/actionsheet/ActionSheetCell'

// article
import Article from './components/article/Article'

// badge
import Badge from './components/badge/Badge'

// button
import Button from './components/button/Button'

// cells
import CellsTitle from './components/cells/CellsTitle'
import Cells from './components/cells/Cells'
import Cell from './components/cells/cell/Cell'
import CellHeader from './components/cells/cell/CellHeader'
import CellBody from './components/cells/cell/CellBody'
import CellFooter from './components/cells/cell/CellFooter'

// dialog
import Dialog from './components/dialog/Dialog'
import DialogHeader from './components/dialog/DialogHeader'
import DialogBody from './components/dialog/DialogBody'
import DialogFooter from './components/dialog/DialogFooter'
import DialogTitle from './components/dialog/DialogTitle'
import DialogBtn from './components/dialog/DialogBtn'

// flex
import Flex from './components/flex/Flex'
import FlexItem from './components/flex/FlexItem'

// footer
import Footer from './components/footer/Footer'
import FooterLinks from './components/footer/FooterLinks'
import FooterLink from './components/footer/FooterLink'
import FooterText from './components/footer/FooterText'

// gallery
import Gallery from './components/gallery/Gallery'
import GalleryImg from './components/gallery/GalleryImg'
import GalleryOperation from './components/gallery/GalleryOperation'
import GalleryDelete from './components/gallery/GalleryDelete'

// grids
import Grids from './components/grids/Grids'
import Grid from './components/grids/grid/Grid'
import GridIcon from './components/grids/grid/GridIcon'
import GridLabel from './components/grids/grid/GridLabel'

// icon
import Icon from './components/icon/Icon'

// mask
import Mask from './components/mask/Mask'

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

// transition
import TransitionFade from './components/transition/TransitionFade'

const VueWeuiComponents = {
  // actionsheet
  ActionSheet,
  ActionSheetTitle,
  ActionSheetMenu,
  ActionSheetAction,
  ActionSheetCell,
  // article
  Article,
  // badge
  Badge,
  // button
  Button,
  // cells
  CellsTitle,
  Cells,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  // dialog
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogBtn,
  // flex
  Flex,
  FlexItem,
  // footer
  Footer,
  FooterLinks,
  FooterLink,
  FooterText,
  // gallery
  Gallery,
  GalleryImg,
  GalleryOperation,
  GalleryDelete,
  // grids
  Grids,
  Grid,
  GridIcon,
  GridLabel,
  // icon
  Icon,
  // mask
  Mask,
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
  // transition
  TransitionFade,
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
