import React from "react";
// redux bağlantısı
import { connect } from 'react-redux';
// actionları sayfaya dahil et
import { login } from '../../../actions/user'
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

    login = async (state) => {
        console.log("burda");
        await this.props.login(state);
        console.log(this.props.loginUserResult, "gelen");
        if (this.props.loginUserResult.code === 200) {
            await localStorage.setItem("user", JSON.stringify(this.props.loginUserResult.data.person));
            this.props.closeSnackbar(this.state.messageKey);
            alert("oturum açılıyor");

            window.location.href = "/panel";
        } else {
            alert("oturum açılamadı");

        }
    }

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
