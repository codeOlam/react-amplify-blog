import React from 'react';
import {Auth} from 'aws-amplify';
import {Styles, Button} from './AccStyles';


async function signIn({username, password}, setUser){
	try{
		const user = await Auth.signIn(username, password)
		const userInfo = {username: user.username, ...user.attributes}
		setUser(userInfo)
	}catch(err){
		console.log('error signing up...', err)
	}
}


function SignIn({signIn, updateFormState}){
	return(
		<div style={Styles.container}>
			<input
			name='username'
			onChange={e => {e.persist();
							updateFormState(e)}}
			style={Styles.input}
			placeholder='username'
			/>
			<input
			type='password'
			name='password'
			onChange={e => {e.persist();
							updateFormState(e)}}
			style={Styles.input}
			placeholder='password'
			/>
			<Button onClick={signIn} title='Sign In' />
		</div>
	)
}

export {signIn, SignIn}