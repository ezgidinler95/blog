import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAllGeneralInformation, getGeneralInformation } from '../../../actions/generalInformation';
import '../../../styles/assets/css/font-awesome.css';
//import '../../../styles/assets/css/jquary.fancybox.css';
import '../../../styles/blog.css';


class DetayBir extends Component {

    async UNSAFE_componentWillMount() {
        const { match: { params } } = this.props;
        await this.props.getGeneralInformation(params._id);
    }
    render() {
        return (
            <div className="App" >
                <div>
                    <div className="container">
                        <section id="more" className="Top_doc hentry">
                            <article className="doc-content">
                                {
                                    <div >
                                        <div >
                                            <div className="baslik">
                                                {this.props.generalInformation.baslik}
                                            </div>
                                            <div className="genelBilgi">
                                                {this.props.generalInformation.genelBilgi}
                                            </div>
                                            <div className="tarih">
                                                {this.props.generalInformation.tarih}
                                            </div>
                                        </div>
                                    </div>
                                }
                            </article>
                        </section>
                    </div>
                </div>;
      </div >
        );
    }
}

const mapStateToProps = ({ generalInformationReducer }) => {
    return {
        ...generalInformationReducer,
    }
}

const mapDispatchToProps = {
    getAllGeneralInformation,
    getGeneralInformation
}

export default connect(mapStateToProps, mapDispatchToProps)((DetayBir));