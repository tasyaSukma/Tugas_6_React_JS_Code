import React, {Component} from 'react';
import './../Style/Header.css';
import Header from './Header';

class MenuHome extends Component{
	render(){
		return(
			<div>
				<Header/>
					<br/>
					<h1>
						<center>Selamat Datang di Halaman Utama</center>
					</h1>
				<div className="image_header">
					<br/>
				</div>
			</div>
		)
	}
}

export default MenuHome;