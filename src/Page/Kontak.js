import React, {Component} from 'react';
import './../Style/Kontak.css';
import Header from './Header';

class Kontak extends Component{
	render(){
		return(
			<div id="kontak_bg">
				<Header/>
				<div className="kontak">
					<h3>
						Jl. Swadaya IV, Pd. Ranggon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860 {" "}
					</h3>
					<p>081312345678</p>
				</div>
			</div>
		);
	}
}

export default Kontak;