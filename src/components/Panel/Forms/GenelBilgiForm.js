import React, { Component } from "react";
import { connect } from 'react-redux';


class GenelBilgiForm extends Component {

    state = {
        image: null,
    };

    async UNSAFE_componentWillMount() {
        await this.props.getAllGeneralInformation();
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

    render() {
        const { classes } = this.props;
        return (
            <div className="Layout" >
                <div className="page-container">
                    <div className="settings-overlay" />
                    <div className="page-inner no-page-title">
                        <div id="main-wrapper">
                            <div className="divider" />
                            <div className="row">
                                <div className="col-xl">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">GENEL BİLGİ FORMU</h5>
                                            <form onSubmit={(e) => { e.preventDefault(); this.handleUpdateGeneralInformationSubmit(e, this.state) }}>
                                                <div className="form-group">
                                                    <input type="hidden" name="_id" defaultValue={this.props.generalInformations.map(generalInformation => generalInformation._id)} />
                                                    <label htmlFor="baslik">Başlık</label>
                                                    <input type="text" className="form-control" name="baslik" id="baslik" defaultValue={this.props.generalInformations.map(generalInformation => generalInformation.baslik)} aria-describedby="emailHelp" placeholder=" baslik" />
                                                    <label htmlFor="genelBilgi">Genel Bilgi</label>
                                                    <textarea row="80" cols="50" type="text" className="form-control" name="genelBilgi" id="genelBilgi" defaultValue={this.props.generalInformations.map(generalInformation => generalInformation.genelBilgi)} aria-describedby="emailHelp" placeholder="Genel Bilgi" />
                                                </div>
                                                <button type="submit" className="btn btn-primary">KAYDET</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = ({ generalInformationReducer, }) => {
    return {
        ...generalInformationReducer,
    }
}

const mapDispatchToProps = {
    addGeneralInformation,
    getAllGeneralInformation,
    updateGeneralInformation,
}

export default connect(mapStateToProps, mapDispatchToProps)((GenelBilgiForm));