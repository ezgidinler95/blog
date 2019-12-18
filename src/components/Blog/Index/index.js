import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAllGeneralInformation } from '../../../actions/generalInformation';
import { getAllHobby } from '../../../actions/hobby';
import { getAllAgenda, } from '../../../actions/agenda';
import '../../../styles/assets/css/font-awesome.css';
import { API_HOBBY_IMAGE_URL } from '../../../config/config';
//import '../../../styles/assets/css/jquary.fancybox.css';
import '../../../styles/blog.css';
import swal from 'sweetalert';
import { Grid } from "@material-ui/core";


class Layout extends Component {

  async UNSAFE_componentWillMount() {
    await this.props.getAllGeneralInformation();
    await this.props.getAllHobby();
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
          <div className="container">
            <section id="more" className="Top_doc hentry">
              <h1 className="doc-title adim"> Ezgi Dinler <br></br>
                <a className="sosyal" href="https://www.twitter.com/ezgi_dnlr"> Twiter </a>
                <a className="sosyal" href="https://www.linkedin.com/in/ezgidinler"> Linkedin </a>
                <a className="sosyal" href="hhttps://www.instagram.com/ezgidnlr/?hl=en"> Instagram </a>
              </h1>
              <article className="doc-content">
                {
                  this.props.generalInformations.map((generalInformation, index) => {
                    let item = null;
                    item =
                      <div key={index}>
                        <div >
                          <div className="baslik">
                            <a className="basliklinkleri" href={"/detay-bir/" + generalInformation._id}  > {generalInformation.baslik} </a>
                          </div>
                          <div className="genelBilgi">
                            {generalInformation.genelBilgi}
                          </div>
                          <div className="tarih">
                            {generalInformation.tarih}
                          </div>
                        </div>
                      </div>
                    return item;
                  })
                }
              </article>
            </section>
            <Grid container>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <section id="foto" className="hentry">
                  {
                    this.props.hobbies.map((hobby, index) => {
                      let item = null;
                      item =
                        <div key={index}>
                          <div>
                            <img
                              alt="hobi resimler" src={API_HOBBY_IMAGE_URL + hobby.image} />
                          </div>
                        </div>
                      return item;
                    })
                  }
                </section>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <section id="sorular" className="hentry">
                  <label style={{ fontSize: "25px" }}>SORULARINIZ</label>
                  <br></br>
                  <input style={{ marginTop: "10px", paddingTop: "10px", width: "500px",  }}></input>
                </section>
              </Grid>
            </Grid>
            <section id="extra" className="hentry">
              <li>
                <a href="/login"> <b>BLOGU GÜNCELLE</b> </a>
              </li>
            </section>
          </div>
        </div>;
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
  getAllGeneralInformation,
  getAllHobby,
  getAllAgenda
}

export default connect(mapStateToProps, mapDispatchToProps)((Layout));