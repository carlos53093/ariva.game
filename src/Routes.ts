// import {Counter} from "./features/counter/Counter"
import Home from "./pages/Home";
import Market from "./pages/Market";
import BuyNft from './pages/BuyNft'
import Event from './pages/Event'
import ShareEvent from './pages/ShareEvent'

import homeIcon from "./assets/images/sidebar/Home.svg"
import marketIcon from "./assets/images/sidebar/store.svg"
import mapIcon from "./assets/images/sidebar/map-marked.svg"
import createIcon from "./assets/images/sidebar/paint-brush.svg"
import walletIcon from "./assets/images/sidebar/wallet.svg"
import eventsIcon from "./assets/images/sidebar/glass-cheers.svg"
import blogIcon from "./assets/images/sidebar/pen-alt.svg"
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Create from "./pages/Create";
import Map from "./pages/Map";
import Profilepage from "./pages/Profilepage";
import ProfileMobile from "./pages/ProfileMobile";
import Play from "./pages/Play";
import RoadMap from "./pages/RoadMap";

export const Routes = () => {

}

Routes.container = [
    {title: "home", path: "/", Component: Home, svg: homeIcon, tooltip: "Home"},
    {title: "map", Component: Map, path: "/map", svg: mapIcon, tooltip: "Map"},
    {title: "market", Component: Market, path: "/market", svg: marketIcon, tooltip: "Market Place"},
    {title: "wallet", Component: null, path: "/wallet", svg: walletIcon, tooltip: "Wallet"},
    {title: "create", Component: Create, path: "", svg: createIcon, tooltip: "Create"},
    {title: "events", Component: Event, path: "", svg: eventsIcon, tooltip: "Events"},
    {title: "blog", Component: Blog, path: "", svg: blogIcon, tooltip: "Blog"},
    {title: "play", Component: Play, path: "/play", svg: blogIcon, hidden: true , tooltip: "Play"},
    {title: "roadMap", Component: RoadMap, path: "/roadmap", svg: blogIcon, hidden: true, tooltip: "RoadMap"},
    {title: "profileMobile", Component: ProfileMobile, path: "/profileMobile", svg: blogIcon, hidden: true, tooltip: "Profile"},
    {title: "marketbuy", Component: BuyNft, path: "/marketbuy/:id", svg: blogIcon, hidden: true, tooltip: "Buy in Market"},
    {title: "shareEvent", Component: ShareEvent, path: "/shareevent/:id", svg: blogIcon, hidden: true, tooltip: "Share Event"},
    {title: "blogPost", Component: BlogPost, path: "/blogPost/:id", svg: blogIcon, hidden: true, tooltip: "Post Blog"},
    {title: "profile", Component: Profilepage, path: "/profile/:pagename", svg: blogIcon, hidden: true, tooltip: "Profile"},
];
