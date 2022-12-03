import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { ListCardRes } from "../HomePage-customer/ListCards";
import '../../App.css';
import { LayoutContext } from "./LayoutContext";
import React  from "react";
import { useState ,useContext ,useEffect} from "react";

const AppLayout = () => {

    const [cssClass, setCssClass] = useState(true) ;

    return (
    <LayoutContext.Provider value={{cssClass, setCssClass}}>
        <div className="AppLayoutAll"  >
        <div className={`SideAll ${cssClass ? "" : "hideSide"}`}>
            <Sidebar />
        </div>
        <div className={`ContentAll ${cssClass ? "" : "showAll"}`}>
            <Outlet />
        </div>
        {/* <Sidebar />
        <Outlet /> */}
    </div>

    </LayoutContext.Provider>
    
    )
};

export default AppLayout;