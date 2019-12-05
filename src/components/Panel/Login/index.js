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
        await this.props.login(state);
        if (this.props.loginUserResult.code === 200) {
            await localStorage.setItem("user", JSON.stringify(this.props.loginUserResult.data.user));
            window.location.href = "/panel";

        } else {
            alert("Oturum açılamadı, Bilgilerinizi kontrol ediniz.");
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
    login
}

export default connect(mapStateToProps, mapDispatchToProps)((Login));