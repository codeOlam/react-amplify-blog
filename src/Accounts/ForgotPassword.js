import React from 'react';
import {Auth} from 'aws-amplify';
import {Styles, Button} from './AccStyles';


async function forgotPassword({username}, updateFormType){
	try{
		await Auth.forgotPassword(username)
		updateFormType('forgotPasswordSubmit')
	}catch(err){
		console.log('error submitting username to reset password...', err)
	}
}


async function forgotPasswordSubmit({username, confirmationCode, password}, updateFormType){
	try{
		await Auth.forgotPasswordSubmit(username, confirmationCode, password)
		updateFormType('signIn')
	}catch(err){
		console.log('error updating password...:', err)
	}
}

function ForgotPassword(props){
	return(
		<div style={Styles.container}>
			<input
			name='username'
			onChange={e => {e.persist();
							props.updateFormState(e)}}
			style={Styles.input}
			placeholder='Username'
			/>
			<Button onClick={props.forgotPassword} title="Rest Password" />
		</div>
		)
}

function ForgotPasswordSubmit(props){
	return(
		<div style={Styles.container}>
			<input
			name='confirmationCode'
			onChange={e => {e.persist();
							props.updateFormState(e)}}
			style={Styles.input}
			placeholder='Confirmation Code'
			/>
			<input
			type='password'
			name='password'
			onChange={e => {e.persist();
							props.updateFormState(e)}}
			style={Styles.input}
			placeholder='New password'
			/>
			<Button onClick={props.forgotPasswordSubmit} title="Save new password" />
		</div>
		)
}

export {forgotPassword, ForgotPassword, forgotPasswordSubmit, ForgotPasswordSubmit}