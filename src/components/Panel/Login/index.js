import React from "react";
// redux bağlantısı
import { connect } from 'react-redux';
// actionları sayfaya dahil et


import LoginForm from './LoginForm'

class Login extends React.Component {

    state = {
        email: '',
        password: '',
        errors: {},
        messageKey: ''

    }

    UNSAFE_componentWillMount() {
        localStorage.clear();
    }

    // login = async (state) => {

    //     this.state.messageKey = this.props.enqueueSnackbar('Oturum gerçekleştiriliyor..', {
    //         variant: "warning",
    //         persist: true // pencereyi açık tutma
    //     });
    //     await this.props.loginPerson(state);
    //     if (this.props.loginResult.code === 200) {
    //         await localStorage.setItem("token", this.props.loginResult.data.token);
    //         await localStorage.setItem("person", JSON.stringify(this.props.loginResult.data.person));
    //         this.props.closeSnackbar(this.state.messageKey);
    //         this.props.enqueueSnackbar("Oturum başarıyla gerçekleşti!", {
    //             variant: "success",
    //             autoHideDuration: 3000
    //         });
    //         window.location.href = "/";
    //     } else {
    //         this.props.closeSnackbar(this.state.messageKey);
    //         this.props.enqueueSnackbar(this.props.loginResult.message, {
    //             variant: "error",
    //             persist: true,
    //             action: (
    //                 <div style={{ color: "#000", fontSize: "13px", cursor: "pointer", fontWeight: "500" }} onClick={() => this.props.closeSnackbar()}>KAPAT</div>
    //             ),
    //         });
    //     }
    // }

    render() {
        return (
            <LoginForm />
        );
    }
}


const mapStateToProps = ({ }) => {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
