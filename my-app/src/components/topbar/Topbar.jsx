// // import React from 'react'
// import "./topbar.css";
// import {Search , Person , Chat , Notifications}  from  "@material-ui/icons";
// /// icon mibashad
// /// aval dakhele npm nasb sepas estefade shavad
// //// baraye estefade az icon mibashad










// //// rfc , tab sakhte component

// export default function Topbar() {
//   return (
//     <div  className="topbarContainer">
//       <div className="topbarLeft"></div>
//         <span className="Logo">Lamosocial</span>



//       <div className="topbarCenter"></div>
//         <div className="searchbar">
//           <Search  className="searchIcon"/>
          
          
          
//         </div>  




//       <div className="topbarRight"></div>
//        <div className="topbarLink">
//           <span  className="topbarLink">Homepage</span>
//           <span className="topbarLink">Timeline</span>



//        </div>






//        <div className="topbarIcons">

//           <div className="topbarIconItem">
//             <Person/>
//             <span className="topbarIconBadge">1</span>

//           </div>


//           <div className="topbarIconItem">
//             <Chat/>
//             <span className="topbarIconBadge">1</span>

//           </div>


//           <div className="topbarIconItem">
//             <Notifications/>
//             <span className="topbarIconBadge">1</span>

//           </div>
//           <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
//           {/* //// bargozari aks */}











//        </div>
//     </div>
//   )
// }














import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (


    <div className="topbarContainer">


      <div className="topbarLeft">
        <span className="logo">Profile</span>
        {/* <br></br> */}
        
        {/* <span  className="resturant">Resturant</span> */}
          
      </div>



      <div className="topbarCenter">
        <div className="searchbar"   style={{color: "white" , fontSize:15 , paddingRight:0}}>
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, food, post or video"
            className="searchInput"
          />
        </div>
      </div>




      <div className="topbarRight">
        <div className="topbarLinks">
          <h1 className="topbarLink" style={{color: "white" , fontSize:15 , marginRight:0}}>Homepage</h1>
          {/* <span className="topbarLink"></span> */}
        </div>
        <div className="topbarLink2">
          <h1 className="topbarLink2" style={{color: "white" , fontSize:15 , marginRight:0}}>Registration</h1>
          {/* <span className="topbarLink"></span> */}
        </div>
        <div className="topbarLink3">
          <h1 className="topbarLink3" style={{color: "white" , fontSize:15 , marginRight:0}}>Login</h1>
          {/* <span className="topbarLink"></span> */}
        </div>






        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            {/* <span className="topbarIconBadge">1</span> */}
          </div>
          <div className="topbarIconItem">
            <Chat />
            {/* <span className="topbarIconBadge">2</span> */}
          </div>
          <div className="topbarIconItem">
            <Notifications />
            {/* <span className="topbarIconBadge">1</span> */}
          </div>
        </div>




        <img src="/assets/person/7.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}















