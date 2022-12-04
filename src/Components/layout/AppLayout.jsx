import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import '../../App.css';

const AppLayout = () => {
    return (
    <div className="AppLayoutAll">
        <div className="SideAll">
            <Sidebar />
        </div>
        <div className="ContentAll">
            <Outlet />
        </div>
    </div>
    )
};

export default AppLayout;