import {Link, Outlet} from "react-router-dom";
import './Home.css'
export default function Home() {
    return (
        <>
            <div className={'header'}>
                <div className="logo">Logo</div>
                <div className="banner">Banner</div>
            </div>
            <div className="menu">
                <div className="menu-left">
                    <div className="home menu-item"><Link to={'/home'}>Home</Link></div>
                    <div className="product menu-item">Product</div>
                </div>
                <div className="menu-right">
                    <div className="orders menu-item">
                        <Link to={'/home/orders'}>
                            Orders
                        </Link>
                    </div>
                    <div className="menu-item"><Link to={'/'}>Logout</Link></div>
                </div>
            </div>
            <div className="main">
                <div className="sidebar">SideBar</div>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}