import React from "react";
// redux bağlantısı
import { connect } from 'react-redux';
// actionları sayfaya dahil et
import { login } from '../../../actions/user'
import swal from 'sweetalert';
import LoginForm from './LoginForm'

class Login extends React.Component {

    state = {

    }

    UNSAFE_componentWillMount() {
        localStorage.clear();
    }

    login = async (e, state) => {
        const loginValue = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        return swal({
            title: "Emin misin?",
            text: "email ve şifreyi onaylıyor musun!",
            icon: "warning",
            buttons: ["Hayır!", "Evet!"],
        })
            .then(async (value) => {
                if (value) {
                    await this.props.addHobby(loginValue);
                    if (this.props.loginUserResult.code === 200) {
                        alert("kayıt ekleme işi başarılı");
                    } else {
                        alert(" Üzgünüm, oturum açılamadı!!!");
                    }
                }
            });

    }


    // login = async (e, state) => {
    //     await this.props.login(state);
    //     console.log(e.target.email.value);
    //     if (this.props.loginUserResult.code === 200) {
    //         console.log(this.props.loginUserResult);
    //         await localStorage.setItem("user", JSON.stringify(this.props.loginUserResult.data.person));
    //         this.props.closeSnackbar(this.state.messageKey);
    //         alert("oturum açılıyor");

    //         window.location.href = "/panel";
    //     } else {
    //         alert("oturum açılamadı");

    //     }
    // }

    render() {
        return (
            <LoginForm onSubmit={this.login} />
        );
    }
}


const mapStateToProps = ({ userReducer }) => {
    return {
        ...userReducer,
    }
}

const mapDispatchToProps = {
    login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
