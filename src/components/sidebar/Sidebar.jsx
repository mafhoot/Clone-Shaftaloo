import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import '../../App.css';

const sidebarNavItems = [
    {
        display: 'Home',
        icon: <i className='bx bx-home'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'User',
        icon: <i className='bx bx-user'></i>,
        to: '/user',
        section: 'user'
    },
    {
        display: 'Orders',
        icon: <i className='bx bx-receipt'></i>,
        to: '/order',
        section: 'order'
    },
]
const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    const [navbarOpen, setNavbarOpen] = useState(false);

    const [user,setUser] = useState({name : "Amir Deldar"});
    const [username,setUsername] = useState("amirdldr@gmail.com");
    useEffect(() => {
    },[]);

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }

    return  <nav className='sidebar'>
        <button onClick={handleToggle}>
        {navbarOpen ? (
            <MdClose style={{ color: "#fff", width: "40px", height: "40px"}} />
        ) : (
            <FiMenu style={{ color: "#fff", width: "40px", height: "40px"}} />
        )}
        </button>
        
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        
        <div className="sidebar__logo">
        <img className="logo" src="https://www.thehindu.com/sci-tech/technology/internet/article17759222.ece/alternates/FREE_1200/02th-egg-person" alt=""></img>
            <p className="name">{user.name}</p>
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>

        </ul>

        
    </nav>
    
};

export default Sidebar;
