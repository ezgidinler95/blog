import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAllGeneralInformation } from '../../../actions/generalInformation';
import { getAllHobby } from '../../../actions/hobby';
import { getAllAgenda, } from '../../../actions/agenda';
import '../../../styles/assets/css/font-awesome.css';
//import '../../../styles/assets/css/jquary.fancybox.css';
import '../../../styles/blog.css';
import { addOpinion, getAllOpinions } from '../../../actions/opinion';
import swal from 'sweetalert';



class DetayBir extends Component {

    async UNSAFE_componentWillMount() {
        await this.props.getAllGeneralInformation();
        await this.props.getAllHobby();
        await this.props.getAllOpinions();
        await this.props.getAllAgenda();
    };
    render() {
        return (
            <div className="App" >
                <div>

                    <div className="container">
                        <section id="more" className="Top_doc hentry">

                            <article className="doc-content">

                                <div className="baslik">
                                    <a className="basliklinkleri" href="/#"> {this.props.generalInformations.map(generalInformation => generalInformation.baslik)} </a>
                                </div>

                                {
                                    this.props.generalInformations.map(generalInformation => generalInformation.genelBilgi)
                                }
                                <div className="tarih">
                                    {
                                        this.props.generalInformations.map(generalInformation => generalInformation.tarih)
                                    }
                                </div>

                            </article>
                        </section>
                        <section id="more" className="Top_doc hentry">
                            <article className="doc-content">

                                <div className="baslik">
                                    <a className="basliklinkleri" href="/#"> {this.props.generalInformations.map(generalInformation => generalInformation.baslik)} </a>
                                </div>

                                {
                                    this.props.generalInformations.map(generalInformation => generalInformation.genelBilgi)
                                }
                                <div className="tarih">
                                    {
                                        this.props.generalInformations.map(generalInformation => generalInformation.tarih)
                                    }
                                </div>

                            </article>
                        </section>
                    </div>
                </div>;
      </div >
        );
    }
}

const mapStateToProps = ({ generalInformationReducer, hobbyReducer, opinionReducer, agendaReducer }) => {
    return {
        ...generalInformationReducer,
        ...hobbyReducer,
        ...opinionReducer,
        ...agendaReducer
    }
}

const mapDispatchToProps = {
    getAllGeneralInformation,
    getAllHobby,
    addOpinion,
    getAllOpinions,
    getAllAgenda
}

export default connect(mapStateToProps, mapDispatchToProps)((DetayBir));