
import React from "react";
import Container from '@material-ui/core/Container';
import withStyles from "@material-ui/core/styles/withStyles";

class GeneralInformationForm extends React.Component {
    state = {

    }
    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <Container component="main" maxWidth="xs">
                    <div className="page-inner no-page-title">
                        <div id="main-wrapper">
                            <div className="divider" />
                            <div className="row">
                                <div className="col-xl">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">GENEL BİLGİ FORMU</h5>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="genelBilgi">Genel Bilgi</label>
                                                    <textarea row="80" cols="50" type="text" className="form-control" id="genelBilgi" aria-describedby="emailHelp" placeholder="Genel Bilgi" />
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></div>
                </Container>
            </main >
        );
    }
}

export default withStyles()(GeneralInformationForm);