import React from "react";
// redux bağlantısı
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { getAllGeneralInformation, updateGeneralInformation, addGeneralInformation } from '../../../actions/generalInformation';
import GenelBilgilerForm from './GenelBilgilerForm';


class GenelBilgiler extends React.Component {

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
        return (
            <GenelBilgilerForm  {...this.props} onSubmit={this.handleUpdateGeneralInformationSubmit} onSubmitAdd={this.handleAddGeneralInformationSubmit} />
        );

    }
}


const mapStateToProps = ({ userReducer, generalInformationReducer }) => {
    return {
        ...userReducer,
        ...generalInformationReducer,
    }
}

const mapDispatchToProps = {

    getAllGeneralInformation,
    updateGeneralInformation,
    addGeneralInformation
}

export default connect(mapStateToProps, mapDispatchToProps)((GenelBilgiler));