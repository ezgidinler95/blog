import React from "react";
// redux bağlantısı
import { connect } from 'react-redux';
// actionları sayfaya dahil et
import GeneralInformationForm from './GeneralInformationForm';

class GeneralInformation extends React.Component {

    state = {
        email: '',
        password: '',
        errors: {},
        messageKey: ''
    }

    UNSAFE_componentWillMount() {

    }

    render() {
        return (
            <GeneralInformationForm />
        );
    }
}

const mapStateToProps = ({ userReducer }) => {
    return {
        ...userReducer,
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInformation);