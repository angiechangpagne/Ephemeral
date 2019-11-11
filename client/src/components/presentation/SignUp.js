import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../../base';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
	event.preventDefault();
	const { email, password } = event.target.elements;
	try {
	  await app
	    .auth()
	    .createUserWithEmailAndPassword(email.value, password.value);
	  history.push('/');
	} catch (error) {
	  alert(error);
	}
  }, [history]);

  return (
	<div className='auth-container'>
	  <div className='auth-modal'>
		<h1>Sign Up</h1>
		<form onSubmit={handleSignUp}>
		  <label>
			Email: 
			<input name='email' type='email' placeholder='Email' />
		  </label>
		  <label>
			Password: 
			<input name='password' type='password' placeholder='Password' />
		  </label>
		  <br />
		  <button className='auth-button' type='submit'>Sign Up</button>
		</form>
	  </div>
	</div>
  )
};

export default withRouter(SignUp);


