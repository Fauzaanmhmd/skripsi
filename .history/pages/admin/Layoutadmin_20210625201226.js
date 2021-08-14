import Navbar from './Navbar'
import Background from './background'
import Footer from './footer/Footer'

export default function Layout({ children, withBackground, judul }) {

    return (
        <div>
            <title>Admin</title>
            <link href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" rel="stylesheet" type="text/css" />
            <link
                href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                rel="stylesheet" />

            <div id="page-top">
                <div className="sidebar">
                    <div className="sidebar_brand">
                        <h3><span className="lab la-accusof"></span> Accusoft</h3>
                    </div>

                    <div className="sidebar_menu">
                        <ul>
                            <li>
                                <a href="" className="active"><span className="las la-igloo"></span>
                                    <span>Dashboard</span></a>
                            </li>
                            <li>
                                <Link href={`./datafeedback`}>
                                    <a href=""><span className="las la-users"></span>
                                        <span>Feedback From Customer</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`./dataproduct`}>
                                    <a href=""><span className="las la-clipboard-list"></span>
                                        <span>Data Of Product</span> </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`./recentorder`}>
                                    <a><span className="las la-shopping-bag"></span>
                                        <span>Recent Orders</span></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main_content">
                    {/* aslinya header */}
                    <div className="main_content_nav">
                        <h3>
                            <label for="nav_toggle">
                                <span className="las la-bars"></span>
                            </label>
                            Dashboarad
                        </h3>
                        <div className="search_wrapper">
                            <span className="las la-search"></span>
                            <input type="search" placeholder="Search Here"></input>
                        </div>

                        <div className="user_wrapper">
                            <img src="img/2.jpg" width="30px" height="30px"></img>
                            <div>
                                <h5>Fauzan Muhammad</h5>
                                <small>Super Admin</small>
                            </div>
                        </div>
                    </div>
                    <main>
                    </main>
                </div>
            </div>
        </div >
    )
}