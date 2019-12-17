import React from "react";
// material components
import withStyles from "@material-ui/core/styles/withStyles";
import { FormControl, InputLabel, } from "@material-ui/core";

class HobilerForm extends React.Component {

    render() {
        const { } = this.props;
        return (

            <div className="page-inner no-page-title">
                <h1>EKLE BAKALIM İÇERİK :D</h1>
                <div className="page-inner no-page-title">
                    <div id="main-wrapper">
                        <div className="divider" />
                        <div className="row">
                            <div className="col-xl">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">HOBİLER </h5>
                                        <form encType="multipart/form-data" onSubmit={(e) => { e.preventDefault(); this.handleUpdateHobbySubmit(e, this.state) }}>
                                            <div className="form-group">
                                                <input type="hidden" name="_id" defaultValue={this.props.hobbies.map(hobby => hobby._id)} />
                                                <label htmlFor="baslik">baslik </label>
                                                <input type="text" className="form-control" name="baslik" id="baslik" aria-describedby="emailHelp" placeholder=" baslik" />
                                                <label htmlFor="spor">En sevdiğiniz spor </label>
                                                <input type="text" className="form-control" name="spor" id="spor" aria-describedby="emailHelp" placeholder="Spor" />
                                                <label htmlFor="spor">En sevdiğiniz dans </label>
                                                <input type="text" className="form-control" name="dans" id="dans" aria-describedby="emailHelp" placeholder="Dans" />
                                                <label htmlFor="spor">En sevdiğiniz müzik türü  </label>
                                                <input type="text" className="form-control" name="müzik" id="müzik" aria-describedby="emailHelp" placeholder="Müzik" />
                                                <label htmlFor="spor">En sevdiğiniz kitap </label>
                                                <input type="text" className="form-control" name="kitap" id="kitap" aria-describedby="emailHelp" placeholder="Kitap " />
                                                <FormControl fullWidth style={{ margin: "35px", padding: "35px", color: "black", fontSize: "10px" }}>
                                                    <InputLabel htmlFor="blockListExcel">GÖRSELİ YÜKLEYİNİZ</InputLabel>
                                                    <br />
                                                    <br />
                                                    <input
                                                        type="file"
                                                        name="image"
                                                        onChange={this.onChangeHandlerFiles}
                                                    />
                                                </FormControl>
                                            </div>
                                            <button type="submit" className="btn btn-primary">KAYDET</button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-inner no-page-title">
                    <div id="main-wrapper">
                        <div className="divider" />
                        <div className="row">
                            <div className="col-xl">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">HOBİLER </h5>
                                        <form encType="multipart/form-data" onSubmit={(e) => { e.preventDefault(); this.handleUpdateHobbySubmit(e, this.state) }}>
                                            <div className="form-group">
                                                <input type="hidden" name="_id" defaultValue={this.props.hobbies.map(hobby => hobby._id)} />
                                                <label htmlFor="baslik">baslik </label>
                                                <input type="text" className="form-control" name="baslik" id="baslik" defaultValue={this.props.hobbies.map(hobby => hobby.baslik)} aria-describedby="emailHelp" placeholder=" baslik" />
                                                <label htmlFor="spor">En sevdiğiniz spor </label>
                                                <input type="text" className="form-control" name="spor" id="spor" defaultValue={this.props.hobbies.map(hobby => hobby.spor)} aria-describedby="emailHelp" placeholder="Spor" />
                                                <label htmlFor="spor">En sevdiğiniz dans </label>
                                                <input type="text" className="form-control" name="dans" id="dans" defaultValue={this.props.hobbies.map(hobby => hobby.dans)} aria-describedby="emailHelp" placeholder="Dans" />
                                                <label htmlFor="spor">En sevdiğiniz müzik türü  </label>
                                                <input type="text" className="form-control" name="müzik" id="müzik" defaultValue={this.props.hobbies.map(hobby => hobby.müzik)} aria-describedby="emailHelp" placeholder="Müzik" />
                                                <label htmlFor="spor">En sevdiğiniz kitap </label>
                                                <input type="text" className="form-control" name="kitap" id="kitap" defaultValue={this.props.hobbies.map(hobby => hobby.kitap)} aria-describedby="emailHelp" placeholder="Kitap " />
                                                <FormControl fullWidth style={{ margin: "35px", padding: "35px", color: "black", fontSize: "10px" }}>
                                                    <InputLabel htmlFor="blockListExcel">GÖRSELİ YÜKLEYİNİZ</InputLabel>
                                                    <br />
                                                    <br />
                                                    <input
                                                        type="file"
                                                        name="image"
                                                        onChange={this.onChangeHandlerFiles}
                                                    />
                                                </FormControl>
                                            </div>
                                            <button type="submit" className="btn btn-primary">KAYDET</button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default withStyles()(HobilerForm);

