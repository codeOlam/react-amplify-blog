import React, {useState} from 'react';
import {SignIn, signIn} from './SignIn';
import {Styles} from './AccStyles';


const initialState={
	username: '',
	password: '',
	email: '',
	confirmatiomCode: ''
}

function Form(props){
	const [formType, updateFormType] = useState('signIn')
	const [formState, updateFormState] = useState(initialState)

	function updateForm(event){
		const newFormState={
			...formState, [event.target.name]: event.target.value
		}
		updateFormState(newFormState)
	}

	function renderForm(){
		switch(formType){
			case 'signIn':
				return(
					<SignIn
						signIn={()=>signIn(formState, props.setUser)}
						updateFormState={e=> updateForm(e)}
					/>
				)
			default:
				return null
		}
	}

	return(
		<div>
			{renderForm()}
			{
				formType==='signIn' &&(
					<>
						<p style={Styles.toggleForm}>
							Need an account?<span 
								style={Styles.anchor}
								onClick={() => updateFormType('signUp')}>
								Sign Up</span>
						</p>
						<p style={{...Styles.toggleForm, ...Styles.resetPassword}}>
							Forgot your password?<span
								style={Styles.anchor}
								onClick={()=> updateFormType('forgotPassword')}>
								Reset Password</span>
						</p>
					</>
				)
			}
		</div>
	)
}

export default Form