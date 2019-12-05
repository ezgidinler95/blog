import React from "react";
import PropTypes from "prop-types";
// material components
import withStyles from "@material-ui/core/styles/withStyles";
import style from '../../../styles/style.css';

class GenelBilgilerForm extends React.Component {

    state = {

    }

    render() {
        console.log(this.props.generalInformations);
        const { classes } = this.props;
        return (
            <div className="page-inner no-page-title">
                <div id="main-wrapper">
                    <div className="divider" />
                    <div className="row">
                        <div className="col-xl">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">GENEL BİLGİ FORMU</h5>
                                    <form onSubmit={(e) => { e.preventDefault(); this.props.onSubmit(this.state) }}>
                                        <div className="form-group">
                                            <input type="hidden" name="_id" defaultValue={this.props.generalInformations.map(generalInformation => generalInformation._id)}></input>
                                            <label htmlFor="baslik">BAŞLIK</label>
                                            <input type="text" className="form-control" name="baslik" id="baslik" defaultValue={this.props.generalInformations.map(generalInformation => generalInformation.baslik)} aria-describedby="emailHelp" placeholder=" baslik"></input>
                                            <label htmlFor="genelBilgi">GENEL BİLGİ</label>
                                            <textarea row="120" cols="50" type="text" className="form-control" name="genelBilgi" id="genelBilgi" defaultValue={this.props.generalInformations.map(generalInformation => generalInformation.genelBilgi)} aria-describedby="emailHelp" placeholder="Genel Bilgi" aria-describedby="emailHelp" placeholder="Genel Bilgi" />
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <button type="submit" className="btn btn-primary">KAYDET</button>
                                    </form>
                                </div>
                                <button type="submit" >PANELE DÖN</button>
                                <br></br>
                                <br></br>
                                <br></br>
                                <button type="submit" >BLOĞA DÖN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles()(GenelBilgilerForm);

