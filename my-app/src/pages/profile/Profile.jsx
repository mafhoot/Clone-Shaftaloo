import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

//// ادرس همان بخش ها را میدهیم بهش

// import img from "../../../public/assets/person/download.jpg"

// import Avator from 'react-avator-edit';
/////برا عکس
// import AvatarEditor from 'react-avatar-editor'
//// برای عکس میباشد





// import React,{useEffect , useState} from "react";
// در کامپوننت های تابعی چیزی به اسم چرخه زندگی وجود نداشت که بعدا با اضافه شدن useEffect این قابلیت اضافه شده.















// import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
// // برای عکس میباشد



export default function Profile() {
  // const [src,setSrc] = useState(false);
  // const [preview , SetPreview] = useState(null);
  // const [displayBasic, setDisplayBasic] = useState(false);
  // const [profile , setprofile]=useState([]);
  // const [pview , setpview] = useState(false);
  // زمانی از const استفاده کنید که قرار است مقدار خاصی را تعریف کنید و هیچگاه تغییرش ندهید










  // const profilefinal = profile.map((item)=>item.pview)

  // const onClose=()=>
  // {
  //   setpview(null);
  // }

  // const onCrop=(view) =>
  // {
  //   setpview(view);
  // }


  // const savecropimage =() =>
  // {
  //   setprofile([...profile , {pview}])
  //   setimagecrop(false);
  // }

  // const[image , setimage]=useState("");
  // const[imagecrop , setimagecrop] = useState("");



  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">



          <div className="profileRightTop">
            {/* /////جایگاه اون عکس وسط */}
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
                  // onClick={()=>setimagecrop(true)}
              ></img>

              {/* <Dialog
              header={()=>(
                <p htmlfor="" className="text_2xl">
                  update profile
                </p> */}




              {/* ) */}
              {/* } visible={imagecrop}  onHide={() => setimagecrop(false)}
              >
                   */}

              {/* </Dialog> */}




{/* 
              <InputText type="file" accept="assets/person/download.jpg" className=""/> */}
              <InputText type="file" accept="/image/*" className="profileUserImg2"  onChange={(event)=>{const file=event.target.files[0];
               


              // if(file && file.type.substring(0,5)=="image")
              // {
              //   setimage(file);
              // }
              // else
              // {
              //   setimage(null);
              // }



              }}/>
           

             
              
          
              
             
            



            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Mahdi Fathian</h4>
                {/* <span className="profileInfoDesc">Hello my friends!</span> */}
            </div>
          </div>
          <div className="profileRightBottom">
            <Rightbar/>
            {/* ////بخش فرم ها */}
          </div>
        </div>
      </div>
    </>
  );
}




















// یکی از تگ های پرکاربرد در طراحی صفحات وب می باشد که با استفاده از آن میتوان یک یا چندین بخش را در یک صفحه ی وب ایجاد کرد.






