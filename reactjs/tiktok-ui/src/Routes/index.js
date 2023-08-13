import Home from "~/pages/Home"
import { HeaderOnly } from "~/components/Layouts"
import Following from "~/pages/Following"
import Profiles from "~/pages/Profiles"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search"
//Public routes
const publicRoutes=[
{path: "/" , component:Home},
{path: "/Following" , component:Following},
{path: "/Profiles" , component:Profiles},
{path: "/Upload" , component:Upload , layout:HeaderOnly},
{path: "/Search" , component:Search , layout:null},

]
//Private routes
const privateRoutes=[
    
]

export {publicRoutes,privateRoutes}