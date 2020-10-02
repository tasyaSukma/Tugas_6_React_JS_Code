import React, {Component} from 'react';
import './../Style/Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
	render(){
		return(
			<div id="head">
				<table>
					<tbody>
						<tr>
								<td>
								<center>
									<h2>
										<Link to="/" className="link">
										Home
										</Link>
										|
										<Link to="/menu_makanan" className="link">
										Makanan
										</Link>
										|
										<Link to="/menu_minuman" className="link">
										Minuman
										</Link>
										|							
										<Link to="/kontak" className="link">
										Kontak
										</Link>
									</h2>
									</center>
								</td>
						
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default Header;