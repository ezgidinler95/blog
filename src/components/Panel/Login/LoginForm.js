import React from "react";
import PropTypes from "prop-types";
// material components
import withStyles from "@material-ui/core/styles/withStyles";
import style from '../../../styles/style.css';

class LoginForm extends React.Component {

    state = {
        email: '',
        password: '',
        errors: {},
        messageKey: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="parent">
                <div className="inner">
                    <form  onSubmit={(e) => { e.preventDefault(); this.props.onSubmit(this.state) }}>
                        <h1> Giriş Yap </h1>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={this.handleChange}
                            autoComplete="off"
                            placeholder="    Username or Email"
                            style={{ fontFamily: "Arial, FontAwesome" }}
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                            autoComplete="off"
                            placeholder="    Password"
                            style={{ fontFamily: "Arial, FontAwesome" }}
                        />
                        <button
                            type="submit"
                            onClick={this.props.login}
                            fullWidth
                        >
                            Oturum Aç
                        </button>

                    </form>
                    <br />
                    <br />
                    <a href className="link">
                        Need Help?
                     </a>
                </div>
            </div>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles()(LoginForm);

