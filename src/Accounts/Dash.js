import React, {useState} from 'react';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';
import Form from './Form';

function Dash(){
	const [user, setUser] = useState(null)
	return(
		<>
	        <Breadcrumb style={{ margin: '16px 0' }}>
	          <Breadcrumb.Item>
	          	<Link to={`/`}>Home</Link>
	          </Breadcrumb.Item>
	          <Breadcrumb.Item>Accounts</Breadcrumb.Item>
	        </Breadcrumb>
			<div className="site-layout-content">	
				<Form setUser={setUser}/>
			</div>
		</>
	)
}

export default Dash