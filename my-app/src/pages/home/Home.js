// import React from 'react'

import "./home.css"
import Topbar from "../../components/topbar/Topbar";

// import About from "../../components/About/About"


import Sidebar from "../../components/sidebar/Sidebar"

// import Rightbar from "../../components/rightbar/Rightbar"

// import Feed from "../../components/feed/Feed"
import { AddBoxOutlined } from "@material-ui/icons";

// import Topbar from "/components/topbar/Topbar"
export default function Home() {
  return (
    // <div>This is home page</div>
    <>
      <Topbar/>
      
      <div className="homecontainer ">
        <Sidebar/> 
        {/* <About  className="aa"/>  */}
        
        {/* <Feed/> */}
        {/* <Rightbar/> */}
      </div> 
        
     
    </>
    // چون که از چند تا کامپوننت استفاده میشه  از <> استفاده میکنیم
  )
}





///// rfc , tab ke bezanim compnent sakhte mishavad





















