import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

class GenelBilgilerForm extends React.Component {
    render() {
      //  const { } = this.props;
        return (
            <div className="page-inner no-page-title">
                <h1 style={{ textAlign: "center", fontSize: "50px", color: "#8014f1" }}>EKLE BAKALIM İÇERİK :D</h1>
                <div id="main-wrapper">
                    <div className="divider" />
                    <div className="row">
                        <div className="col-xl">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">BlOG YAZISI EKLEME FORMU</h5>
                                    <form onSubmit={(e) => { e.preventDefault(); this.props.onSubmitAdd(e, this.state) }}>
                                        <div className="form-group">
                                            <input type="hidden" name="_id" ></input>
                                            <label htmlFor="baslik">BAŞLIK</label>
                                            <input type="text" className="form-control" name="baslik" id="baslik" aria-describedby="emailHelp" placeholder=" baslik"></input>
                                            <br></br>
                                            <label htmlFor="genelBilgi">GENEL BİLGİ</label>
                                            <textarea row="120" cols="50" type="text" className="form-control" name="genelBilgi" id="genelBilgi" aria-describedby="emailHelp" placeholder="Genel Bilgi" />
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <button type="submit" className="btn btn-primary">KAYDET</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div id="main-wrapper">
                    <div className="divider" />
                    <div className="row">
                        <div className="col-xl">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">BlOG YAZISI GÜNCELLEME FORMU</h5>
                                    <form onSubmit={(e) => { e.preventDefault(); this.props.onSubmit(e, this.state) }}>
                                        <div className="form-group">
                                            <input type="hidden" name="_id" defaultValue={this.props.generalInformations.map(generalInformation => generalInformation._id)}></input>
                                            <label htmlFor="baslik">BAŞLIK</label>
                                            <input type="text" className="form-control" name="baslik" id="baslik" defaultValue={this.props.generalInformations.map(generalInformation => generalInformation.baslik)} aria-describedby="emailHelp" placeholder=" baslik"></input>
                                            <br></br>
                                            <label htmlFor="genelBilgi">GENEL BİLGİ</label>
                                            <textarea row="120" cols="50" type="text" className="form-control" name="genelBilgi" id="genelBilgi" defaultValue={this.props.generalInformations.map(generalInformation => generalInformation.genelBilgi)} placeholder="Genel Bilgi" />
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <button type="submit" className="btn btn-primary">KAYDET</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default withStyles()(GenelBilgilerForm);

