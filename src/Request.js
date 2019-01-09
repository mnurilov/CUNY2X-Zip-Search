import React, { Component } from 'react';
import AZip from './AZip.js';
import axios from 'axios';
// import './Request.css';

class Request extends Component {

	constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.fetchZipCity();
    }

    fetchZipCity = () => {
    axios.get("http://ctp-zip-api.herokuapp.com/zip/" + String(this.props.requestZip))
        .then(response => {
        	this.setState({
        		data: response.data,
        	});

        	// this.state.data = response.data;

        	//console.log(response.data);
            /*var wanted = [this.props.requestZip];
            let cities = response.data.map();
            this.setState({ cities: result});


            <AZip data={this.state.data} key={city.RecordNumber} />
            */
        })
        .catch(err => console.log(err));
    }
    // Cities;
    render(){
		 const Cities = this.state.data.map((city, index) =>
			<AZip data={city} key={index}/>
        );
		 //console.log(Cities);
        return (
	        <div className="cities-container">
	            <ol className="cities">{Cities}</ol>
	       </div>
        );
    }
}
    
export default Request;