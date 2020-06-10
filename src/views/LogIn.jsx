import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default props => {
  const [
    loginUser,
    setLoginUser
  ] = useState({});

  const onChangeHandler = e => {
    setLoginUser({ ...loginUser, [e.target.id]: e.target.value });
  };

  const onLoginHandler = () => {
    props.login(loginUser);
  };

  const emailChecker = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div id='Login' className='uk-position-center'>
      <div className='LoginCard uk-card uk-card-default uk-card-body uk-width-1-2@m'>
        <h3 className='uk-card-title uk-text-center'>
          Log In <PersonIcon fontSize='large' />
        </h3>
        <TextField
          onChange={onChangeHandler}
          value={loginUser.email}
          id='email'
          label='Email'
          type='email'
          autoComplete='current-password'
          fullWidth
          autoFocus
        />
        <TextField
          onChange={onChangeHandler}
          value={loginUser.password}
          id='password'
          label='Password'
          type='password'
          autoComplete='current-password'
          fullWidth
          className='uk-margin-top'
        />
        <div className='uk-text-center uk-margin-medium-top'>
          <Button
            onClick={onLoginHandler}
            className='uk-margin-top'
            size='large'
            variant='outlined'
            block
            color='primary'>
            Login
          </Button>
        </div>
        <div className='uk-text-center uk-margin-top'>
          <p>
            Dont have an account yet? <Link to='/register'>Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
