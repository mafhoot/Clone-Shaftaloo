import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";


// import Avator from 'react-avator-edit';
/////برا عکس
import AvatarEditor from 'react-avatar-editor'



import React,{useEffect , useState} from "react";



import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
// // برای عکس میباشد



export default function Profile() {
  const [src,setSrc] = useState(null);
  const [preview , SetPreview] = useState(null);

  const onClose=()=>
  {
    SetPreview(null);
  }

  const onCrop=view =>
  {
    SetPreview(view);
  }



  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">



          <div className="profileRightTop">
            <div className="profileCover">

            {/* <AvatarEditor
             
             width={400}
             height={300}
             onCrop ={onCrop}
             onClose={onClose}
         
         
         /> */}
              {/* <AvatarEditor/> */}
              <img
                className="profileCoverImg"
                src="assets/food.jpg"
                alt=""
              />




              <img
                  className="profileUserImg"
                  src="assets/person/download.jpg"
                  alt=""
                  // src={src}
              ></img>
              {/* <InputText type="file" accept="assets/person/download.jpg" className=""/> */}
              <InputText type="file" accept="assets/person/download.jpg" className="profileUserImg2"/>
           

             
              
          
              
             
            



            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Mahdi Fathian</h4>
                {/* <span className="profileInfoDesc">Hello my friends!</span> */}
            </div>
          </div>
          <div className="profileRightBottom">
            {/* <Feed /> */}
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}



























