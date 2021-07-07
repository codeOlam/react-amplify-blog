import React from 'react';
import {Auth} from 'aws-amplify';
import {Styles, Button} from './AccStyles';


async function signUp({username, password, email}, updateFormType){
	try{
		await Auth.signUp({username, password, attributes:{email}})
		console.log('sign up successful')
		updateFormType('confirmSignUp')
	}catch(err){
		console.log('Error signing up...: ', err)
	}
}


async function confirmSignUp({username, confirmationCode}, updateFormType){
	try{
		await Auth.confirmSignUp(username, confirmationCode)
		console.log('Confirmation Code successful!')
		updateFormType('signIn')
	}catch(err){
		console.log('Error siging up...: ', err)
	}
}

function SignUp({updateFormState, signUp}){
	return(
		<div style={Styles.container}>
			<input
				name='username'
				onChange={e=> {e.persist();
					updateFormState(e)
				}}
				style={Styles.input}
				placeholder='Username'
			/>
			<input
				type='password'
				name='password'
				onChange={e=> {e.persist();
					updateFormState(e)
				}}
				style={Styles.input}
				placeholder='password'
			/>
			<input
				name='email'
				onChange={e=>{e.persist();
					updateFormState(e)
				}}
				style={Styles.input}
				placeholder='Email'
			/>
			<Button onClick={signUp} title="Sign Up"/>
		</div>
	)
}

function ConfirmSignUp(props){
	return(
		<div style={Styles.container}>
			<input
				name='confirmationCode'
				onChange={e=>{e.persist();
					props.updateFormState(e)
				}}
				style={Styles.input}
				placeholder='Confirmation Code'
			/>
			<Button onClick={props.confirmSignUp} title="Confirm Sign Up" />
		</div>
	)
}

export {signUp, SignUp, confirmSignUp, ConfirmSignUp}