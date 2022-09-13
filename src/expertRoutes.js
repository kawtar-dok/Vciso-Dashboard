// Soft UI Dashboard React layouts experts
import ExpertDashboard from "layouts/expert/expertDashboard";
import ExpertMessages from "layouts/expert/messagerie";
import ExpertFormation from "layouts/expert/formation";
import ExpertCalendrier from "layouts/expert/calendrier";
import ExpertWorkshop from "layouts/expert/workshop";
import ExpertService from "layouts/expert/service";
import ExpertRTL from "layouts/expert/rtl";
import ExpertProfile from "layouts/expert/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Cube from "examples/Icons/Cube";

const expertRoutes = [
  
  //Expert Dashboard*
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/expertDashboard",
    icon: <Shop size="12px" />,
    component: <ExpertDashboard />,
    noCollapse: true,
  },
  
  {
    type: "collapse",
    name: "Messagerie",
    key: "messages",
    route: "/expertMessagerie",
    icon: <Shop size="12px" />,
    component: <ExpertMessages />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Calendrier",
    key: "calendrier",
    route: "/expertCalendrier",
    icon: <Office size="12px" />,
    component: <ExpertCalendrier />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Formation",
    key: "formation",
    route: "/expertFormation",
    icon: <Office size="12px" />,
    component: <ExpertFormation />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Workshop",
    key: "workshop",
    route: "/expertWorkshop",
    icon: <Office size="12px" />,
    component: <ExpertWorkshop />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Service",
    key: "service",
    route: "/expertService",
    icon: <Shop size="12px" />,
    component: <ExpertService />,
    noCollapse: true,
  },


  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    route: "/expertRtl",
    icon: <Settings size="12px" />,
    component: <ExpertRTL />,
    noCollapse: true,
  },
  
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/expertProfile",
    icon: <CustomerSupport size="12px" />,
    component: <ExpertProfile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/Authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/Authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },

];

export default expertRoutes;
