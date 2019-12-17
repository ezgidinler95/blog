import React from "react";
// redux bağlantısı
import { connect } from 'react-redux';
import swal from 'sweetalert';

import { addHobby, updateHobby, getAllHobby } from '../../../actions/hobby';
import HobilerForm from './HobilerForm';


class Hobiler extends React.Component {

    state = {
        image: null,
    };

    async UNSAFE_componentWillMount() {
        await this.props.getAllHobby();
    };


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


    render() {
        return (
            <HobilerForm  {...this.props} onSubmit={this.handleUpdateHobbySubmit} onSubmitAdd={this.handleAddHobbySubmit} />
        );

    }
}


const mapStateToProps = ({ userReducer, hobbyReducer }) => {
    return {
        ...userReducer,
        ...hobbyReducer,
    }
}

const mapDispatchToProps = {
    addHobby,
    updateHobby,
    getAllHobby

}

export default connect(mapStateToProps, mapDispatchToProps)((Hobiler));