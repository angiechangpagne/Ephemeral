import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../../base';
import { AuthContext } from './Auth';

const Login = ({ history }) => {
  const handleLogin = useCallback(async event => {
	event.preventDefault();
	const { email, password } = event.target.elements;
	try {
	  await app
	    .auth()
	    .signInWithEmailAndPassword(email.value, password.value);
	  history.push('/');
	} catch (error) {
	  alert(error);
	}
  }, [history]);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) return <Redirect to='/' />;

  return (
	<div className='auth-container'>
	  <div className='auth-modal'>
		<h1>Login</h1>
		<form onSubmit={handleLogin}>
		  <label>
			Email: 
			<input name='email' type='email' placeholder='Email' />
		  </label>
		  <label>
			Password: 
			<input name='password' type='password' placeholder='Password' />
		  </label>
		  <br />
		  <button className='auth-button' type='submit'>Login</button>
		</form>
	  </div>
	</div>
  )
};

export default withRouter(Login);


