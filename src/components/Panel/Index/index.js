import React, { Component } from "react";
import { connect } from 'react-redux';
import '../../../styles/assetsss/css/custom.css';
import '../../../styles/assetsss/css/concept.min.css';
//import '../../../styles/assetsss/plugins/custom.css';
import '../../../styles/assetsss/plugins/bootstrap/css/bootstrap.min.css';
import '../../../styles/assetsss/plugins/font-awesome/css/all.min.css';
import '../../../styles/assetsss/plugins/icomoon/style.css';
import '../../../styles/assetsss/plugins/switchery/switchery.min.css';

class Layout extends Component {

    render() {
        return (
            <div className="Layout" >
                <div className="page-container">
                    {/* Page Sidebar */}
                    <div className="page-sidebar">
                        <div className="profile-menu">
                            <a href="app-profile.html">
                                <img src="../../assets/images/avatars/avatar1.png" alt="" />
                            </a>
                        </div>
                        <div className="page-sidebar-inner">
                            <div className="page-sidebar-menu">
                                <ul>
                                    <li>
                                        <a href="#" data-toggle="tooltip" data-placement="right" title="Dashboard"><i className="fas fa-rocket" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" data-placement="right" title="News"><i className="fas fa-globe-africa" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" data-placement="right" title="Inbox"><i className="fas fa-inbox" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" data-placement="right" title="Chat"><i className="far fa-comments" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="settings-menu-btn">
                            <a href="#" className="settings-menu-link"><i className="fas fa-wrench" /></a>
                        </div>
                    </div>{/* /Page Sidebar */}
                    <div className="settings-sidebar">
                        <div className="settings-sidebar-content">
                            <div className="settings-sidebar-header">
                                <span>Settings</span>
                                <a href="javascript: void(0);" className="settings-menu-close"><i className="icon-close" /></a>
                            </div>
                            <div className="right-sidebar-settings">
                                <span className="settings-title">General Settings</span>
                                <ul className="sidebar-setting-list list-unstyled">
                                    <li>
                                        <span className="settings-option">Notifications</span><input type="checkbox" className="js-switch" defaultChecked />
                                    </li>
                                    <li>
                                        <span className="settings-option">Activity log</span><input type="checkbox" className="js-switch" defaultChecked />
                                    </li>
                                    <li>
                                        <span className="settings-option">Automatic updates</span><input type="checkbox" className="js-switch" />
                                    </li>
                                    <li>
                                        <span className="settings-option">Allow backups</span><input type="checkbox" className="js-switch" />
                                    </li>
                                </ul>
                                <span className="settings-title">Account Settings</span>
                                <ul className="sidebar-setting-list list-unstyled">
                                    <li>
                                        <span className="settings-option">Chat</span><input type="checkbox" className="js-switch" defaultChecked />
                                    </li>
                                    <li>
                                        <span className="settings-option">Incognito mode</span><input type="checkbox" className="js-switch" />
                                    </li>
                                    <li>
                                        <span className="settings-option">Public profile</span><input type="checkbox" className="js-switch" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="settings-overlay" />
                    {/* Page Content */}
                    <div className="page-content">
                        <div className="secondary-sidebar">
                            <div className="secondary-sidebar-bar">
                                <a href="#" className="logo-box">concept</a>
                            </div>
                            <div className="secondary-sidebar-menu">
                                <ul className="accordion-menu">
                                    <li>
                                        <a href="index.html">
                                            <i className="menu-icon icon-home4" /><span>Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="menu-icon icon-apps" /><span>Genel Bilgi</span><i className="accordion-icon fas fa-angle-left" />
                                        </a>
                                        <ul className="sub-menu">
                                            <li><a href="app-mailbox.html">Mailbox</a></li>
                                            <li><a href="app-todo.html">Todo</a></li>
                                            <li><a href="app-contacts.html">Contacts</a></li>
                                            <li><a href="app-profile.html">Profile</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="menu-icon icon-layers" /><span>Eğitim Hayatım</span><i className="accordion-icon fas fa-angle-left" />
                                        </a>
                                        <ul className="sub-menu">
                                            <li><a href="layout-blank.html">Blank Page</a></li>
                                            <li><a href="layout-collapsed-sidebar.html">Collapsed Sidebar</a></li>
                                            <li><a href="layout-fixed-header.html">Fixed Header</a></li>
                                            <li><a href="layout-fixed-sidebar.html">Fixed Sidebar</a></li>
                                            <li><a href="layout-fixed-sidebar-header.html">Fixed Sidebar &amp; Header</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="menu-icon icon-brush" /><span>Neden Yazılım</span><i className="accordion-icon fas fa-angle-left" />
                                        </a>
                                        <ul className="sub-menu">
                                            <li><a href="style-typography.html">Typography</a></li>
                                            <li><a href="style-code.html">Code</a></li>
                                            <li><a href="style-tables.html">Tables</a></li>
                                            <li><a href="style-icons.html">Icons</a></li>
                                        </ul>
                                    </li>
                                    <li className="active-page">
                                        <a href="javascript:void(0)">
                                            <i className="menu-icon icon-flash_on" /><span>Hedefler ve İstekler</span><i className="accordion-icon fas fa-angle-left" />
                                        </a>
                                        <ul className="sub-menu">
                                            <li><a href="comp-alerts.html">Alerts</a></li>
                                            <li><a href="comp-badge.html" className="active">Badge</a></li>
                                            <li><a href="comp-breadcrumb.html">Breadcrumb</a></li>
                                            <li><a href="comp-buttons.html">Buttons</a></li>
                                            <li><a href="comp-btn-group.html">Button Group</a></li>
                                            <li><a href="comp-card.html">Card</a></li>
                                            <li><a href="comp-collapse.html">Collapse</a></li>
                                            <li><a href="comp-dropdowns.html">Dropdowns</a></li>
                                            <li><a href="comp-lists.html">List Group</a></li>
                                            <li><a href="comp-media-object.html">Media Object</a></li>
                                            <li><a href="comp-modal.html">Modal</a></li>
                                            <li><a href="comp-navs.html">Navs</a></li>
                                            <li><a href="comp-navbar.html">Navbar</a></li>
                                            <li><a href="comp-pagination.html">Pagination</a></li>
                                            <li><a href="comp-popovers.html">Popovers</a></li>
                                            <li><a href="comp-progress.html">Progress</a></li>
                                            <li><a href="comp-spinners.html">Spinners</a></li>
                                            <li><a href="comp-toasts.html">Toasts</a></li>
                                            <li><a href="comp-tooltips.html">Tooltips</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="menu-icon icon-code" /><span>Günün Konusu</span><i className="accordion-icon fas fa-angle-left" />
                                        </a>
                                        <ul className="sub-menu">
                                            <li><a href="form-elements.html">Form Elements</a></li>
                                            <li><a href="form-upload.html">File Upload</a></li>
                                            <li><a href="form-image-crop.html">Image Crop</a></li>
                                            <li><a href="form-image-zoom.html">Image Zoom</a></li>
                                            <li><a href="form-select2.html">Select2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="charts.html">
                                            <i className="menu-icon icon-show_chart" /><span>Charts</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="menu-icon icon-star" /><span>Pages</span><i className="accordion-icon fas fa-angle-left" />
                                        </a>
                                        <ul className="sub-menu">
                                            <li><a href="invoice.html">Invoice</a></li>
                                            <li><a href="404.html">404 Page</a></li>
                                            <li><a href="500.html">500 Page</a></li>
                                            <li><a href="coming-soon.html">Coming Soon</a></li>
                                            <li><a href="help-center.html">Help Center</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="register.html">Register</a></li>
                                            <li><a href="lockscreen.html">Lockscreen</a></li>
                                            <li><a href="pricing-tables.html">Pricing Tables</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-divider" />
                                    <li>
                                        <a href="#">
                                            <i className="menu-icon icon-help_outline" /><span>Documentation</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="menu-icon icon-public" /><span>Changelog</span><span className="badge badge-danger">1.0</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="search-form">
                                <form action="#" method="GET">
                                    <div className="input-group">
                                        <input type="text" name="search" className="form-control search-input" placeholder="Type something..." />
                                        <span className="input-group-btn">
                                            <button className="btn btn-default" id="close-search" type="button"><i className="icon-close" /></button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <nav className="navbar navbar-default navbar-expand-md">
                                <div className="container-fluid">
                                    {/* Brand and toggle get grouped for better mobile display */}
                                    <div className="navbar-header">
                                        <div className="logo-sm">
                                            <a href="javascript:void(0)" id="sidebar-toggle-button"><i className="fas fa-bars" /></a>
                                            <a className="logo-box" href="index.html"><span>concept</span></a>
                                        </div>
                                        <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                            <i className="fas fa-angle-down" />
                                        </button>
                                    </div>
                                    {/* Collect the nav links, forms, and other content for toggling */}
                                    <div className="collapse navbar-collapse justify-content-between" id="bs-example-navbar-collapse-1">
                                        <ul className="nav navbar-nav mr-auto">
                                            <li className="collapsed-sidebar-toggle-inv"><a href="javascript:void(0)" id="collapsed-sidebar-toggle-button"><i className="fas fa-bars" /></a></li>
                                            <li><a href="javascript:void(0)" id="toggle-fullscreen"><i className="fas fa-expand" /></a></li>
                                            <li><a href="javascript:void(0)" id="search-button"><i className="fas fa-search" /></a></li>
                                        </ul>
                                    </div>{/* /.navbar-collapse */}
                                    <ul className="nav navbar-nav">
                                        <li className="nav-item d-md-block"><a href="javascript:void(0)" className="right-sidebar-toggle" data-sidebar-id="main-right-sidebar"><i className="fas fa-envelope" /></a></li>
                                        <li className="dropdown nav-item d-md-block">
                                            <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fas fa-bell" /></a>
                                            <ul className="dropdown-menu dropdown-menu-right dropdown-lg dropdown-content">
                                                <li className="drop-title">Notifications<a href="#" className="drop-title-link"><i className="fas fa-angle-right" /></a></li>
                                                <li className="slimscroll dropdown-notifications">
                                                    <ul className="list-unstyled dropdown-oc">
                                                        <li>
                                                            <a href="#"><span className="notification-badge bg-info"><i className="fas fa-at" /></span>
                                                                <span className="notification-info">
                                                                    <span className="notification-info"><b>John Doe</b> mentioned you in a post "Update v1.5"</span>
                                                                    <small className="notification-date">06:07</small>
                                                                </span></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span className="notification-badge bg-danger"><i className="fas fa-bolt" /></span>
                                                                <span className="notification-info">
                                                                    <span className="notification-info">4 new special offers from the apps you follow!</span>
                                                                    <small className="notification-date">Yesterday</small>
                                                                </span></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span className="notification-badge bg-success"><i className="fas fa-bullhorn" /></span>
                                                                <span className="notification-info">
                                                                    <span className="notification-info">There is a meeting with <b>Ethan</b> in 15 minutes!</span>
                                                                    <small className="notification-date">Yesterday</small>
                                                                </span></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown nav-item d-md-block">
                                            <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src="../../assets/images/avatars/avatar1.png" alt="" className="rounded-circle" /></a>
                                            <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                                <li><a href="#">Profile</a></li>
                                                <li><a href="#">Calendar</a></li>
                                                <li><a href="#"><span className="badge float-right badge-info">64</span>Messages</a></li>
                                                <li role="separator" className="divider" />
                                                <li><a href="#">Account Settings</a></li>
                                                <li><a href="#">Log Out</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>{/* /.container-fluid */}
                            </nav>
                        </div>{/* /Page Header */}
                        {/* Page Inner */}
                        
                        <div className="page-inner no-page-title">

                            <div className="page-footer">
                                <p>2019 © EZGİ DİNLER</p>
                            </div>
                        </div>
                        {/* /Page Inner */}
                        <div className="page-right-sidebar" id="main-right-sidebar">
                            <div className="page-right-sidebar-inner">
                                <div className="right-sidebar-top">
                                    <span className="chat-header">Chat</span>
                                    <a href="javascript:void(0)" className="right-sidebar-toggle right-sidebar-close" data-sidebar-id="main-right-sidebar"><i className="icon-close" /></a>
                                </div>
                                <div className="right-sidebar-content">
                                    {/* Tab panes */}
                                    <div className="chat-list">
                                        <span className="chat-title">Recent</span>
                                        <a href="javascript:void(0);" className="right-sidebar-toggle chat-item unread" data-sidebar-id="chat-right-sidebar">
                                            <div className="user-avatar">
                                                <img src="../../assets/images/avatars/avatar1.png" alt="" />
                                            </div>
                                            <div className="chat-info">
                                                <span className="chat-author">David</span>
                                                <span className="chat-text">Hello there!</span>
                                                <span className="chat-time">16:20</span>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0);" className="right-sidebar-toggle chat-item unread active-user" data-sidebar-id="chat-right-sidebar">
                                            <div className="user-avatar">
                                                <img src="../../assets/images/avatars/avatar2.png" alt="" />
                                            </div>
                                            <div className="chat-info">
                                                <span className="chat-author">Bob</span>
                                                <span className="chat-text">Hello there!</span>
                                                <span className="chat-time">11:34</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="chat-list">
                                        <span className="chat-title">Older</span>
                                        <a href="javascript:void(0);" className="right-sidebar-toggle chat-item" data-sidebar-id="chat-right-sidebar">
                                            <div className="user-avatar">
                                                <img src="../../assets/images/avatars/avatar3.png" alt="" />
                                            </div>
                                            <div className="chat-info">
                                                <span className="chat-author">Tom</span>
                                                <span className="chat-text">Hello there!</span>
                                                <span className="chat-time">2d</span>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0);" className="right-sidebar-toggle chat-item active-user" data-sidebar-id="chat-right-sidebar">
                                            <div className="user-avatar">
                                                <img src="../../assets/images/avatars/avatar4.png" alt="" />
                                            </div>
                                            <div className="chat-info">
                                                <span className="chat-author">Anna</span>
                                                <span className="chat-text">Hello there!</span>
                                                <span className="chat-time">4d</span>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0);" className="right-sidebar-toggle chat-item active-user" data-sidebar-id="chat-right-sidebar">
                                            <div className="user-avatar">
                                                <img src="../../assets/images/avatars/avatar5.png" alt="" />
                                            </div>
                                            <div className="chat-info">
                                                <span className="chat-author">Noah</span>
                                                <span className="chat-text">Hello there!</span>
                                                <span className="chat-time">&nbsp;</span>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0);" className="load-more-messages" data-toggle="tooltip" data-placement="bottom" title="Load More">•••</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="page-right-sidebar" id="chat-right-sidebar">
                            <div className="page-right-sidebar-inner">
                                <div className="right-sidebar-top">
                                    <div className="chat-top-info">
                                        <span className="chat-name">Noah</span>
                                        <span className="chat-state">2h ago</span>
                                    </div>
                                    <a href="javascript:void(0)" className="right-sidebar-toggle chat-sidebar-close float-right" data-sidebar-id="chat-right-sidebar"><i className="icon-keyboard_arrow_right" /></a>
                                </div>
                                <div className="right-sidebar-content">
                                    <div className="right-sidebar-chat slimscroll">
                                        <div className="chat-bubbles">
                                            <div className="chat-start-date">02/06/2017 5:58PM</div>
                                            <div className="chat-bubble them">
                                                <div className="chat-bubble-img-container">
                                                    <img src="../../assets/images/avatars/avatar1.png" alt="" />
                                                </div>
                                                <div className="chat-bubble-text-container">
                                                    <span className="chat-bubble-text">Hello</span>
                                                </div>
                                            </div>
                                            <div className="chat-bubble me">
                                                <div className="chat-bubble-text-container">
                                                    <span className="chat-bubble-text">Hello!</span>
                                                </div>
                                            </div>
                                            <div className="chat-start-date">03/06/2017 4:22AM</div>
                                            <div className="chat-bubble me">
                                                <div className="chat-bubble-text-container">
                                                    <span className="chat-bubble-text">lorem</span>
                                                </div>
                                            </div>
                                            <div className="chat-bubble them">
                                                <div className="chat-bubble-img-container">
                                                    <img src="../../assets/images/avatars/avatar1.png" alt="" />
                                                </div>
                                                <div className="chat-bubble-text-container">
                                                    <span className="chat-bubble-text">ipsum dolor sit amet</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-write">
                                        <form className="form-horizontal" action="javascript:void(0);">
                                            <input type="text" className="form-control" placeholder="Say something" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* /Page Content */}
                </div>{/* /Page Container */}


            </div >
        );
    }
}

const mapStateToProps = ({ }) => {
    return {


    }
}

const mapDispatchToProps = {

}



export default connect(mapStateToProps, mapDispatchToProps)((Layout));