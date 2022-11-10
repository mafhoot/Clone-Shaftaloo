// import React from 'react'

import "./home.css"
import Topbar from "../../components/topbar/Topbar";

import Sidebar from "../../components/sidebar/Sidebar"

import Rightbar from "../../components/rightbar/Rightbar"

import Feed from "../../components/feed/Feed"

// import Topbar from "/components/topbar/Topbar"
export default function Home() {
  return (
    // <div>This is home page</div>
    <>
      <Topbar/>
      <div className="homecontainer ">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>     
     
    </>
    // چون که از چند تا کامپوننت استفاده میشه  از <> استفاده میکنیم
  )
}





///// rfc , tab ke bezanim compnent sakhte mishavad





















