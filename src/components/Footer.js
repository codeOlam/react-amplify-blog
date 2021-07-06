import React from 'react';
import {Link} from 'react-router-dom';

const footerStyle = {
	borderTop: '1px solid #ddd',
	display: 'flex',
	textAlign: 'center',
	padding: 20
}

function Footer(){
	return(
		<>
			<div style={footerStyle}>
				<Link to="/">Home</Link>
			</div>
			<p style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</p>
		</>
	)
}

export default Footer