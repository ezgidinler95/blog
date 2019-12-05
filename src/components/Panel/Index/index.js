import React, { Component } from "react";
import { connect } from 'react-redux';
import { addGeneralInformation } from '../../../actions/generalInformation';
import { addHobby, updateHobby } from '../../../actions/hobby';
import swal from 'sweetalert';
import { getAllGeneralInformation, updateGeneralInformation } from '../../../actions/generalInformation';
import { getAllHobby } from '../../../actions/hobby';
import { addAgenda, getAllAgenda, updateAgenda } from '../../../actions/agenda';
import { FormControl, InputLabel, Link, } from "@material-ui/core";
import '../../../styles/assetsss/css/custom.css';
import '../../../styles/assetsss/css/concept.min.css';
//import '../../../styles/assetsss/plugins/custom.css';
import '../../../styles/assetsss/plugins/bootstrap/css/bootstrap.min.css';
import '../../../styles/assetsss/plugins/font-awesome/css/all.min.css';
import '../../../styles/assetsss/plugins/icomoon/style.css';
import '../../../styles/assetsss/plugins/switchery/switchery.min.css';


class Layout extends Component {

    state = {
        image: null,
    };

    async UNSAFE_componentWillMount() {
        await this.props.getAllGeneralInformation();
        await this.props.getAllHobby();
        await this.props.getAllAgenda();
    };

    handleAddGeneralInformationSubmit = async (e, state) => {
        const generalInformation = {
            genelBilgi: e.target.genelBilgi.value,
            baslik: e.target.baslik.value,

        };
        return swal({
            title: "Emin misin?",
            text: "Yeni bir içerik ekliceksin!",
            icon: "warning",
            buttons: ["Hayır!", "Evet!"],
        })
            .then(async (value) => {
                if (value) {
                    await this.props.addGeneralInformation(generalInformation);
                    if (this.props.addGeneralInformationResult.code === 200) {
                        alert("kayıt ekleme işi başarılı");
                    } else {
                        alert(" Üzgünüm, kayıt ekleme işi başarısız!!!");
                    }
                }
            });
    }

    handleAddAgendaSubmit = async (e, state) => {
        const agenda = {
            baslik: e.target.baslik.value,
            haberler: e.target.haberler.value,

        };
        return swal({
            title: "Emin misin?",
            text: "Yeni bir içerik ekliceksin!",
            icon: "warning",
            buttons: ["Hayır!", "Evet!"],
        })
            .then(async (value) => {
                if (value) {
                    await this.props.addAgenda(agenda);
                    if (this.props.addAgendaResult.code === 200) {
                        alert("kayıt ekleme işi başarılı");
                    } else {
                        alert(" Üzgünüm, kayıt ekleme işi başarısız!!!");
                    }
                }
            });
    }
    handleUpdateAgendaSubmit = async (e, state) => {
        const agenda = {
            _id: e.target._id.value,
            baslik: e.target.baslik.value,
            haberler: e.target.haberler.value,

        };
        return swal({
            title: "Emin misin?",
            text: "İçeriği güncelleyeceksin!",
            icon: "warning",
            buttons: ["Hayır!", "Evet!"],
        })
            .then(async (value) => {
                if (value) {
                    await this.props.updateAgenda(agenda);
                    if (this.props.updateAgendaResult.code === 200) {
                        alert("kayıt guncelleme işi başarılı");
                    } else {
                        alert(" Üzgünüm, kayıt guncelleme işi başarısız!!!");
                    }
                }
            });
    }
    handleUpdateGeneralInformationSubmit = async (e, state) => {
        const generalInformation = {
            _id: e.target._id.value,
            genelBilgi: e.target.genelBilgi.value,
            baslik: e.target.baslik.value,

        };
        return swal({
            title: "Emin misin?",
            text: "İçeriği güncelleyeceksin!",
            icon: "warning",
            buttons: ["Hayır!", "Evet!"],
        })
            .then(async (value) => {
                if (value) {
                    await this.props.updateGeneralInformation(generalInformation);
                    if (this.props.updateGeneralInformationResult.code === 200) {
                        alert("kayıt guncelleme işi başarılı");
                    } else {
                        alert(" Üzgünüm, kayıt guncelleme işi başarısız!!!");
                    }
                }
            });
    }

    handleUpdateHobbySubmit = async (e, state) => {
        const hobby = {
            _id: e.target._id.value,
            baslik: e.target.baslik.value,
            spor: e.target.spor.value,
            dans: e.target.dans.value,
            müzik: e.target.müzik.value,
            kitap: e.target.kitap.value,

        };
        return swal({
            title: "Emin misin?",
            text: "İçeriği güncelleyeceksin!",
            icon: "warning",
            buttons: ["Hayır!", "Evet!"],
        })
            .then(async (value) => {
                if (value) {
                    await this.props.updateHobby(hobby);
                    if (this.props.updateHobbyResult.code === 200) {
                        alert("kayıt guncelleme işi başarılı");
                    } else {
                        alert(" Üzgünüm, kayıt guncelleme işi başarısız!!!");
                    }
                }
            });
    }

    handleAddHobbySubmit = async (e, state) => {

        let hobby = new FormData();
        hobby.append('baslik', e.target.baslik.value);
        hobby.append('spor', e.target.spor.value);
        hobby.append('dans', e.target.dans.value);
        hobby.append('müzik', e.target.müzik.value);
        hobby.append('kitap', e.target.kitap.value);

        if (state.image) {
            if (state.image.length > 0) {
                for (var i = 0; i < state.image.length; i++) {
                    hobby.append('image', state.image[i]);
                }
            }
        }

        return swal({
            title: "Emin misin?",
            text: "Yeni bir içerik ekliceksin!",
            icon: "warning",
            buttons: ["Hayır!", "Evet!"],
        })
            .then(async (value) => {
                if (value) {
                    await this.props.addHobby(hobby);
                    if (this.props.addHobbyResult.code === 200) {
                        alert("kayıt ekleme işi başarılı");
                    } else {
                        alert(" Üzgünüm, kayıt ekleme işi başarısız!!!");
                    }
                }
            });
    }

    handleAddOnerilenlerSubmit = async (e, state) => {
        const recommend = {
            oneriler: e.target.oneriler.value,
            oneriBaslik: e.target.oneriBaslik.value,
        };
        return swal({
            title: "Emin misin?",
            text: "Yeni bir içerik ekliceksin!",
            icon: "warning",
            buttons: ["Hayır!", "Evet!"],
        })

            .then(async (value) => {
                if (value) {
                    await this.props.addRecommend(recommend);
                    if (this.props.addRecommendResult.code === 200) {
                        alert("kayıt ekleme işi başarılı");
                    } else {
                        alert(" Üzgünüm, kayıt ekleme işi başarısız!!!");
                    }
                }
            });
    }

    handleUpdateRecommandSubmit = async (e, state) => {
        const recomannd = {
            _id: e.target._id.value,
            oneriler: e.target.oneriler.value,
            oneriBaslik: e.target.oneriBaslik.value,

        };
        return swal({
            title: "Emin misin?",
            text: "İçeriği güncelleyeceksin!",
            icon: "warning",
            buttons: ["Hayır!", "Evet!"],
        })
            .then(async (value) => {
                if (value) {
                    await this.props.updateRecommand(recomannd);
                    if (this.props.updateRecommandResult.code === 200) {
                        alert("kayıt guncelleme işi başarılı");
                    } else {
                        alert(" Üzgünüm, kayıt guncelleme işi başarısız!!!");
                    }
                }
            });
    }

    onChangeHandlerFiles = async event => {
        if (event.target.files.length > 0) {
            const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
            if (acceptedImageTypes.includes(event.target.files[0].type)) {
                await this.setState({
                    [event.target.name]: event.target.files,
                });
            } else {
                this.errorMessage();
            }
        }
    }

    errorMessage = () => {
        return this.props.enqueueSnackbar('Lütfen bir resim dosyası yükleyin.', {
            variant: "error",
            persist: true,
            action: (
                <div style={{ color: "#000", fontSize: "13px", cursor: "pointer", fontWeight: "500" }} onClick={() => this.props.closeSnackbar()}>KAPAT</div>
            ),
        });
    }

    render() {
        const { classes } = this.props;
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


                        <div>  <Link rel="stylesheet" href="/panel-genel-bilgiler" style={{ backgroundColor: "pink", border: "1px solid blue", marginLeft: "200px" }} >GENEL BİLGİLERİ GÜNCELLE</Link></div>

                        <div className="page-inner no-page-title">
                            <div id="main-wrapper">
                                <div className="divider" />
                                <div className="row">
                                    <div className="col-xl">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">HOBİLER </h5>
                                                <form encType="multipart/form-data" onSubmit={(e) => { e.preventDefault(); this.handleUpdateHobbySubmit(e, this.state) }}>
                                                    <div className="form-group">
                                                        <input type="hidden" name="_id" defaultValue={this.props.hobbies.map(hobby => hobby._id)} />
                                                        <label htmlFor="baslik">baslik </label>
                                                        <input type="text" className="form-control" name="baslik" id="baslik" defaultValue={this.props.hobbies.map(hobby => hobby.baslik)} aria-describedby="emailHelp" placeholder=" baslik" />
                                                        <label htmlFor="spor">En sevdiğiniz spor </label>
                                                        <input type="text" className="form-control" name="spor" id="spor" defaultValue={this.props.hobbies.map(hobby => hobby.spor)} aria-describedby="emailHelp" placeholder="Spor" />
                                                        <label htmlFor="spor">En sevdiğiniz dans </label>
                                                        <input type="text" className="form-control" name="dans" id="dans" defaultValue={this.props.hobbies.map(hobby => hobby.dans)} aria-describedby="emailHelp" placeholder="Dans" />
                                                        <label htmlFor="spor">En sevdiğiniz müzik türü  </label>
                                                        <input type="text" className="form-control" name="müzik" id="müzik" defaultValue={this.props.hobbies.map(hobby => hobby.müzik)} aria-describedby="emailHelp" placeholder="Müzik" />
                                                        <label htmlFor="spor">En sevdiğiniz kitap </label>
                                                        <input type="text" className="form-control" name="kitap" id="kitap" defaultValue={this.props.hobbies.map(hobby => hobby.kitap)} aria-describedby="emailHelp" placeholder="Kitap " />
                                                        <FormControl fullWidth style={{ margin: "35px", padding: "35px", color: "black", fontSize: "10px" }}>
                                                            <InputLabel htmlFor="blockListExcel">GÖRSELİ YÜKLEYİNİZ</InputLabel>
                                                            <br />
                                                            <br />
                                                            <input
                                                                type="file"
                                                                name="image"
                                                                onChange={this.onChangeHandlerFiles}
                                                            />
                                                        </FormControl>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">KAYDET</button>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="page-inner no-page-title">
                            <div id="main-wrapper">
                                <div className="divider" />
                                <div className="row">
                                    <div className="col-xl">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">GÜNDEM </h5>
                                                <form onSubmit={(e) => { e.preventDefault(); this.handleUpdateAgendaSubmit(e, this.state) }}>
                                                    <div className="form-group">
                                                        <input type="hidden" name="_id" defaultValue={this.props.agendas.map(agenda => agenda._id)} />
                                                        <label htmlFor="baslik">Baslik </label>
                                                        <input type="text" className="form-control" name="baslik" id="baslik" defaultValue={this.props.agendas.map(agenda => agenda.baslik)} placeholder="Baslik" />
                                                        <label htmlFor="haberler">Haberler </label>
                                                        <textarea row="80" cols="50" type="text" className="form-control" name="haberler" id="haberler" defaultValue={this.props.agendas.map(agenda => agenda.haberler)} aria-describedby="emailHelp" placeholder=" haberler" />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">KAYDET</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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

const mapStateToProps = ({ generalInformationReducer, hobbyReducer, agendaReducer }) => {
    return {
        ...generalInformationReducer,
        ...hobbyReducer,
        ...agendaReducer

    }
}

const mapDispatchToProps = {
    addGeneralInformation,
    addHobby,
    getAllGeneralInformation,
    getAllHobby,
    updateHobby,
    updateGeneralInformation,
    addAgenda,
    getAllAgenda,
    updateAgenda
}



export default connect(mapStateToProps, mapDispatchToProps)((Layout));