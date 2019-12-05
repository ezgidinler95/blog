import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAllGeneralInformation } from '../../../actions/generalInformation';
import { getAllHobby } from '../../../actions/hobby';
import { getAllAgenda, } from '../../../actions/agenda';
import '../../../styles/assets/css/font-awesome.css';
//import '../../../styles/assets/css/jquary.fancybox.css';
import '../../../styles/blog.css';
import { addOpinion, getAllOpinions } from '../../../actions/opinion';
import swal from 'sweetalert';
import FsLightbox from 'fslightbox-react';
import { API_HOBBY_IMAGE_URL } from '../../../config/config';


class Layout extends Component {

  async UNSAFE_componentWillMount() {
    await this.props.getAllGeneralInformation();
    await this.props.getAllHobby();
    await this.props.getAllOpinions();
    await this.props.getAllAgenda();
  };


  handleAddOpinionSubmit = async (e, state) => {
    const opinion = {
      name: e.target.name.value,
      opinion: e.target.opinion.value,
    };
    return swal({
      title: "Emin misin?",
      text: "Yeni bir içerik ekliceksin!",
      icon: "warning",
      buttons: ["Hayır!", "Evet!"],
    })
      .then(async (value) => {
        if (value) {
          await this.props.addOpinion(opinion);
          if (this.props.addOpinionResult.code === 200) {
            alert("kayıt ekleme işi başarılı");
          } else {
            alert(" Üzgünüm, kayıt ekleme işi başarısız!!!");
          }
        }
      });
  }

  render() {
    return (
      <div className="App" >
        <div>
          <div className="documentation-menu">
            <div className="row">
              <ul id="menu-main-menu" className="twelve columns">
                <li>
                  <a className="active" href="#more">
                    Genel Bilgi
                     </a>
                  <ul className="children">
                    <li>
                      <a href="#wp-info">Hobbiler</a>
                    </li>
                    <li>
                      <a href="#RFB">Requirements For sorbroix</a>
                    </li>
                    <li>
                      <a href="#Included">What's Included</a>
                    </li>
                    <li>
                      <a href="#forum-support">Free Support</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#Installation">Eğitim Hayatım</a>
                  <ul className="children">
                    <li>
                      <a href="#wpinstallation">WordPress Installation</a>
                    </li>
                    <li>
                      <a href="#ftpinstallation">FTP Installation</a>
                    </li>
                    <li>
                      <a href="#changlog">sorbroix Changelog</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#demo-content">Neden Yazılım</a>
                  <ul className="children">
                    <li>
                      <a href="#all-democontent">Import All Demo Content</a>
                    </li>
                    <li>
                      <a href="#theme-option">Import Theme Option</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Hedefler ve İstekler</a>
                  <ul className="children">
                    <li>
                      <a href="#set_home">Setting Up Home Page</a>
                    </li>
                    <li>
                      <a href="#set_onepage">Setting Up One Page</a>
                    </li>
                    <li>
                      <a href="#set_blogpage">Setting Up Blog large Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#page-builder">Günün Konusu</a>
                  <ul className="children">
                    <li>
                      <a href="#onepage_builder">
                        How to install Element Visual Compusor.
                         </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Blog</a>
                  <ul className="children">
                    <li>
                      <a href="#create_post">Creating Blog Posts</a>
                    </li>
                    <li>
                      <a href="#blog_option">Blog Theme Options</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#theme_option">Theme Option</a>
                  <ul className="children">
                    <li>
                      <a href="#footer">Footer Theme Option</a>
                    </li>
                    <li>
                      <a href="#style_option">Styling Options</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#widget">İletişim</a>
                </li>
                <li>
                  <a href="#extra">Görüş ve Önerileriniz</a>
                  <ul className="children">
                    <li>
                      <a href="#extra">Make your site run faster</a>
                    </li>
                  </ul>
                </li>

              </ul>
            </div>
          </div>
          <div className="container">
            <section id="more" className="Top_doc hentry">
              <h1 className="doc-title"> {this.props.generalInformations.map(generalInformation => generalInformation.baslik)} </h1>
              <article className="doc-content">
                {
                  this.props.generalInformations.map(generalInformation => generalInformation.genelBilgi)
                }
              </article>
            </section>
            <section id="wp-info" className="hentry">
              <header className="entry-header">
                <h2 className="entry-title">{this.props.hobbies.map(hobby => hobby.baslik)}</h2>
              </header>
              <article className="entry-content">
                <h2>Bu ayın enleri :D :D </h2>
                <br></br>
                <div className="column-half">
                  <div className="shortcode-list">
                    <ul>
                      <li>
                        <p>en sevdiğim spor dalı:</p>
                        {
                          this.props.hobbies.map(hobby => hobby.spor)
                        }
                      </li>
                      <li>
                        <p>en sevdiğim müzik türü:</p>
                        {
                          this.props.hobbies.map(hobby => hobby.müzik)
                        }
                      </li>
                      <li>
                        <p>en sevdiğim  dans:</p>
                        {
                          this.props.hobbies.map(hobby => hobby.dans)
                        }
                      </li>
                      <li>
                        <p>en sevdiğim  kitap:</p>
                        {
                          this.props.hobbies.map(hobby => hobby.kitap)
                        }
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="column-half column-half-last">

                  <div>
                    <img
                      style={{ width: "250px", height: "150px", cursort: "pointer" }} src={this.props.hobbies.map(hobby => hobby.image) ? API_HOBBY_IMAGE_URL + this.props.hobbies.map(hobby => hobby.image) : "/none.png"} />
                    <FsLightbox
                      sources={[
                        this.props.hobbies.map(hobby => hobby.image) ? API_HOBBY_IMAGE_URL + this.props.hobbies.map(hobby => hobby.image) : "/none.png"
                      ]}
                    />
                  </div>

                </div>
                <div className="clear" />
              </article>
            </section>

            <section id="Included" className="hentry">
              <header className="entry-header">
                <h2 className="entry-title">{this.props.agendas.map(agenda => agenda.baslik)} </h2>
              </header>
              <article className="entry-content">

                <div className="shortcode-list">
                  {this.props.agendas.map(agenda => agenda.haberler)}
                </div>
                <div className="clear" />
              </article>
            </section>

            <section id="wpinstallation" className="hentry">
              <header className="entry-header">
                <h2 className="entry-title">WordPress Installation</h2>
              </header>
              <article className="entry-content">
                <div className="column-half">
                  <h3>Follow the steps below to install via WordPress.</h3>


                </div>
                <div className="column-half column-half-last">

                </div>
                <h3 style={{ clear: "both", paddingTop: 30 }}>
                  Common Install Error: Are You Sure You Want To Do This?
          </h3>

                <div className="clear" />
              </article>
            </section>





            <section id="theme-option" className="hentry">
              <header className="entry-header">
                <h2 className="entry-title">Import Theme Option</h2>
              </header>
              <article className="entry-content">
                <div className="column-half">
                  <p>
                    For Theme options import file : Please go to{" "}
                    <strong>
                      wp admin &gt;&gt; appearance &gt;&gt; theme options &gt;&gt; click
                      Backup options
              </strong>
                    . Then compy all{" "}
                    <strong>
                      dummy_contnent &gt;&gt; data_export &gt;&gt; theme_options.txt
              </strong>{" "}
                    file and paste here.{" "}
                  </p>
                </div>
                <div className="column-half column-half-last">
                  <a
                    className="fancybox"
                    href="assets/images/import2.png"
                    data-fancybox-group="gallery"
                    title="Step 1: WordPress import file"
                  >
                    <img src="assets/images/import2.png" />
                  </a>
                </div>
                <div className="clear" />
              </article>
            </section>
            <section id="Header" className="hentry">
              <header className="entry-header">
                <h2 className="entry-title">Header</h2>
              </header>
              <article className="entry-content">

                <div className="shortcode-list">
                  <ul>
                    <li>
                      <strong>Adding The Logo &amp; Favicons</strong>
                    </li>
                    <li>
                      <strong>Setting Up The Menu Home</strong>
                    </li>
                    <li>
                      <strong>Setting Up The Menu Blog</strong>
                    </li>
                  </ul>
                </div>
                <div className="clear" />
              </article>
            </section>
            <section id="add_logofavicon" className="hentry">
              <header className="entry-header">
                <h2 className="entry-title">Adding The Logo &amp; Favicons</h2>
              </header>
              <article className="entry-content">
                <div className="column-half">
                  <h3>To Insert Your Logo and Your Favicon, Follow The Steps Below.</h3>
                  <p>
                    <strong> Step 1:</strong> More requires that you upload your logo as
                    an image file (Logo.png). And Setup Logo for version Light and
                    Version Dark Do you want.
            </p>
                  <p>
                    <strong>Step 2:</strong> More requires that you upload your Favicon
                    as an image file (Favicon.ico)
            </p>
                </div>
                <div className="clear" />
              </article>
            </section>
            <section id="setting_menu" className="hentry">
              <header className="entry-header">
                <h2 className="entry-title">Setting Up The Menu</h2>
              </header>
              <article className="entry-content">

                <div className="column-half">
                  <h3>More Offers 2 Different Menu Locations</h3>
                  <div className="shortcode-list">
                    <ul>
                      <li>
                        <strong>Menu Home Page</strong> – this is the Home menu that
                        shows in the Home Page.
                </li>
                      <li>
                        <strong>Menu Use For All Page.</strong> – this is the menu that
                        can be assigned to the single, blog, page...
                </li>
                    </ul>
                  </div>
                </div>
                <div className="column-half column-half-last">
                  <a
                    className="fancybox"
                    href="assets/images/setup_menu.png"
                    data-fancybox-group="gallery"
                    title="Step 1: WordPress import file"
                  >
                    <img src="assets/images/setup_menu.png" />
                  </a>
                </div>
                <div className="clear" />
              </article>
            </section>


            <section id="set_onepage" className="hentry">
              <header className="entry-header">
                <h2 className="entry-title">Setting Up One Page</h2>
              </header>
              <article className="entry-content">

                <div className="column-half">
                  <h3>First Create A Custom Menu For Your One Page</h3>
                  <p style={{ paddingTop: 10 }}>
                    <strong>Step 1 – </strong> Navigate to Appearance &gt; Menus section
                    of your admin and click “Create A New Menu” link and assign it a
                    name.
            </p>

                  <p>
                    <strong>Step 3 – </strong>Repeat step 2 for each menu item, giving
                    each a unique #name.
            </p>
                  <p>
                    <strong>Step 4 – </strong>Once you have added your menu items, be
                    sure to click the “Save” button.
            </p>
                </div>
                <div className="column-half column-half-last">
                  <a
                    className="fancybox"
                    href="assets/images/menu-onepage.png"
                    data-fancybox-group="gallery"
                    title="Setting Up The Menu Other Page"
                  >
                    <img src="assets/images/menu-onepage.png" />
                  </a>
                </div>
                <div className="clear" />
                <div className="column-half">
                  <h3>To Create The Home Page, Follow The Steps Below.</h3>

                </div>
                <div className="column-half column-half-last">
                  <a
                    className="fancybox"
                    href="assets/images/home.png"
                    data-fancybox-group="gallery"
                    title="Setting Up The Home Page"
                  >
                    <img src="assets/images/home.png" />
                  </a>
                </div>
                <div className="clear" />
              </article>
            </section>


            <section id="set_blogpage" className="hentry">
              <header className="entry-header">
                <h2 className="entry-title">Setting Up Blog Page</h2>
              </header>
              <article className="entry-content">
                <div className="column-half">
                  <h3>To Create The Blog Page, Follow The Steps Below.</h3>


                </div>
                <div className="column-half column-half-last">

                </div>
                <div className="clear" />
              </article>
            </section>

            <section id="onepage_builder" className="hentry">
              <header className="entry-header">
                <h2 className="entry-title">Günün Konusu </h2>
              </header>
              <article className="entry-content">
                <div className="column-half">
                  <h1 className="entry-title">
                    Tarihte bugün </h1>

                </div>

                <div className="clear" />
                <hr />
                <div className="column-half">
                  <h3>Setup Contact Form</h3>

                </div>
                <div className="column-half column-half-last">

                </div>
                <div className="clear" />
                <hr />
                <div className="clear" />
                <div className="column-half">

                </div>
                <div className="column-half column-half-last">

                </div>
                <hr />
                <div className="clear" />


              </article>
            </section>


            <section id="create_post" className="hentry">
              <header className="entry-header">
                <h2 className="entry-title">Creating Blog Posts</h2>
              </header>
              <article className="entry-content">


              </article>
            </section>


            <section id="blog_option" className="hentry">
              <header className="entry-header">
                <h2 className="entry-title">Blog Theme Options</h2>
              </header>
              <article className="entry-content">
                <div className="column-half column-half-last">

                </div>
                <div className="column-half column-half-last">

                </div>
                <div className="clear" />
              </article>
            </section>


            <section id="extra" className="hentry">
              <header className="entry-header">
                <h2 className="entry-title">Görüş ve Önerileriniz</h2>
              </header>
              <article className="entry-content">
                <div className="column-half">
                  <form onSubmit={(e) => { e.preventDefault(); this.handleAddOpinionSubmit(e, this.state) }}>
                    <label style={{ fontWeight: "bold", fontSize: "15px" }}>Adınız:</label>
                    <br></br>
                    <br></br>
                    <input name="name" id="name" style={{ width: "500px", height: "30px" }} ></input>
                    <br></br>
                    <br></br>
                    <label style={{ fontWeight: "bold", fontSize: "15px" }}>Görüşleriniz:</label>
                    <br></br>
                    <br></br>
                    <input name="opinion" id="opinion" style={{ width: "500px", height: "80px" }} ></input>
                    <br></br>
                    <br></br>
                    <button style={{ width: "500px", backgroundColor: "#30ADE8" }}>KAYDET</button>
                  </form>
                </div>
                <div className="column-half column-half-last">
                  <label style={{ fontWeight: "bold", fontSize: "15px" }}>Yorum yapanlar:</label>
                  <br></br>
                  {
                    this.props.opinions.map(opinion => opinion.name)
                  }
                  <br></br>
                  <br></br>
                  <label style={{ fontWeight: "bold", fontSize: "15px" }}>Yapılan yorumlar:</label>
                  <br></br>
                  {
                    this.props.opinions.map(opinion => opinion.opinion)
                  }
                </div>

                <li>
                  <a href="/login"> <b>BLOGU GÜNCELLE</b> </a>
                </li>

                <div className="clear" />
              </article>

            </section>
          </div>
        </div>;
      </div >
    );
  }
}

const mapStateToProps = ({ generalInformationReducer, hobbyReducer, opinionReducer, agendaReducer }) => {
  return {
    ...generalInformationReducer,
    ...hobbyReducer,
    ...opinionReducer,
    ...agendaReducer
  }
}

const mapDispatchToProps = {
  getAllGeneralInformation,
  getAllHobby,
  addOpinion,
  getAllOpinions,
  getAllAgenda
}

export default connect(mapStateToProps, mapDispatchToProps)((Layout));