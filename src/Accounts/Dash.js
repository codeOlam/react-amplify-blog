import React, {useState, useEffect} from 'react';
import {Breadcrumb, Button} from 'antd';
import {Link} from 'react-router-dom';
import {Auth, Hub} from 'aws-amplify';
import Form from './Form';
import {signOut} from './SignIn';

function Dash(){
	const [user, setUser] = useState(null)

	async function checkUser(){
		try{
			 const data = await Auth.currentUserPoolUser()
			 const userInfo = {username: data.username, ...data.attributes,}
			 setUser(userInfo)
		}catch(err){
			console.log('error: ', err)
		}
	}

	useEffect(()=>{
		checkUser()
		Hub.listen('auth', (data) =>{
			const {payload} = data
			if(payload.event==='signOut'){
				setUser(null)
			}
		})
	}, [])


	if(user){	
		return(
			<>
		        <Breadcrumb style={{ margin: '16px 0' }}>
		          <Breadcrumb.Item>
		          	<Link to={`/`}>Home</Link>
		          </Breadcrumb.Item>
		          <Breadcrumb.Item>Accounts</Breadcrumb.Item>
		        </Breadcrumb>
				<div className="site-layout-content">
					<h1>Profile</h1>
					<h2>Username: {user.username}</h2>
					<h3>Email: {user.email}</h3>
					<Button onClick={signOut}>Sign Out</Button>
				</div>
			</>
		)
	}
	return <Form setUser={setUser}/>
}

export default Dash