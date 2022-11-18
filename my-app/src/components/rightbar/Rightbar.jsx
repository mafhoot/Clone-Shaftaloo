import "./rightbar.css";
// import { Users } from "../../dummyData";
// import Online from "../online/Online";
// import React, { useState ,useEffect} from "react";

// import React, {useCallback,useContext,useMemo , useState} from "react";

// import {useDropzone} from "react-dropzone";





export default function Rightbar({ profile }) {
  // const [email, setEmail] = useState('')
  // const [pass, setPass] = useState('')
  // const [loginFlag,setLogin] = useState ("")

  // const HomeRightbar = () => {
  //   return (
  //     <>
  //       <div className="birthdayContainer">
  //         <img className="birthdayImg" src="assets/gift.png" alt="" />
  //         <span className="birthdayText">
  //           <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
  //         </span>
  //       </div>
  //       <img className="rightbarAd" src="assets/ad.png" alt="" />
  //       <h4 className="rightbarTitle">Online Friends</h4>
  //       <ul className="rightbarFriendList">
  //         {/* {Users.map((u) => (
  //           // <Online key={u.id} user={u} />
  //         ))} */}
  //       </ul>
  //     </>
  //   );
  // };


  const ProfileRightbar = () => {

    // const [fileUrl, setfileUrl] = useState(null);
    return (
      <>
        {/* ///// تگ span بصورت این لاین است */}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">
              <input name="city" placeholder="Mashhad" />
            </span>


            <span className="rightbarInfoValue2_3">Country:</span>
            <span className="rightbarInfoValue" style={{paddingRight:0}}>
              <input name="firstname" placeholder="Iran" />
            </span>

            {/* <br></br> */}

            <span className="rightbarInfoValue2_2">ّFirstName:</span>
            <span className="rightbarInfoValue"  style={{paddingRight:0}}>
              <input name="firstname" placeholder="Mahdi" className="firstname" />
            </span>

            <br></br>





{/* 
            <form className="edit_profile" >
                <label htmlFor="email">E-Mail</label>
                <input value="text" type="text" placeholder="Example@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value="password"  type="text" placeholder="********" id="password" name="password" />
                <button type="submit" >Log In</button>
            </form> */}




            {/* <form>
                  <label>
                    <p>FirstName</p>
                    <input name="firstname" />
                  </label>

                  <label>
                    <p>LastName</p>
                    <input name="lastname" />
                  </label>
                  <br></br>
                  <button type="submit" className="submit">Submit</button>
            </form> */}




          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">
              <input name="from" placeholder="Madrid" />
            </span>


            <span className="rightbarInfoKey2">Job:</span>
            <span className="rightbarInfoValue">
              <input name="job" placeholder="engineer" />
            </span>



            
            <span className="rightbarInfoValue2_2">LastName:</span>
            <span className="rightbarInfoValue"  style={{ paddingRight:0}}>
              <input name="lastname" placeholder="Fathian" />
            </span>
            {/* <label>
                  <p>FirstName</p>
                  <input name="firstname" />
            </label>

            <label>
                  <p>LastName</p>
                  <input name="lastname" />
            </label> */}



          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              <input name="Relation" placeholder="Single" />
            </span>
          </div>



          <div className="rightbarInfoItem">
            <div>
              <span className="rightbarInfoKey3">Description:</span>
              <br></br>
            </div>
            <span className="rightbarInfoValue5">
              {/* <input name="Relation" placeholder="Single" /> */}
              <textarea cols={30} rows={6} placeholder="Bio"></textarea>
            </span>
          </div>


          
          <br></br>
          <button type="submit" className="submit">Edit Information</button>
        </div>
        {/* <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
    */}
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        { <ProfileRightbar /> }
      </div>
    </div>
  );
}









