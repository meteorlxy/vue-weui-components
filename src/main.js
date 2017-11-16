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
import ButtonArea from './components/button/ButtonArea'

// cells
import Cells from './components/cells/Cells'
import CellsTitle from './components/cells/CellsTitle'
import CellsTips from './components/cells/CellsTips'
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
import GalleryOpr from './components/gallery/GalleryOpr'
import GalleryDelete from './components/gallery/GalleryDelete'

// grids
import Grids from './components/grids/Grids'
import Grid from './components/grids/grid/Grid'
import GridIcon from './components/grids/grid/GridIcon'
import GridLabel from './components/grids/grid/GridLabel'

// icon
import Icon from './components/icon/Icon'

// input
import Input from './components/input/Input'
import InputRadio from './components/input/InputRadio'
import InputCheckbox from './components/input/InputCheckbox'
import InputSwitch from './components/input/InputSwitch'
import InputAgree from './components/input/InputAgree'
import Select from './components/input/Select'
import Textarea from './components/input/Textarea'

// loadmore
import Loadmore from './components/loadmore/Loadmore'

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

// msg
import Msg from './components/msg/Msg'
import MsgIcon from './components/msg/MsgIcon'
import MsgText from './components/msg/MsgText'
import MsgTitle from './components/msg/MsgTitle'
import MsgDesc from './components/msg/MsgDesc'
import MsgOpr from './components/msg/MsgOpr'
import MsgExtra from './components/msg/MsgExtra'

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
  ButtonArea,
  // cells
  Cells,
  CellsTitle,
  CellsTips,
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
  GalleryOpr,
  GalleryDelete,
  // grids
  Grids,
  Grid,
  GridIcon,
  GridLabel,
  // icon
  Icon,
  // input
  Input,
  InputRadio,
  InputCheckbox,
  InputSwitch,
  InputAgree,
  Select,
  Textarea,
  // loadmore
  Loadmore,
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
  // msgp
  Msg,
  MsgIcon,
  MsgText,
  MsgTitle,
  MsgDesc,
  MsgOpr,
  MsgExtra,
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
