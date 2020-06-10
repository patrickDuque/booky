import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default props => {
  const [
    registerUser,
    setRegisterUser
  ] = useState({});

  const onChangeHandler = e => {
    setRegisterUser({ ...registerUser, [e.target.id]: e.target.value });
  };

  const onRegisterHandler = () => {
    props.register(registerUser);
  };

  return (
    <div id='Register' className='uk-position-center'>
      <div className='RegisterCard uk-card uk-card-default uk-card-body uk-width-1-2@m'>
        <h3 className='uk-card-title uk-text-center'>
          Register <PersonIcon fontSize='large' />
        </h3>
        <TextField onChange={onChangeHandler} id='name' label='Name' type='text' fullWidth autoFocus />
        <TextField
          onChange={onChangeHandler}
          id='email'
          label='Email'
          type='email'
          fullWidth
          className='uk-margin-top'
        />
        <TextField
          onChange={onChangeHandler}
          id='password'
          label='Password'
          type='password'
          fullWidth
          className='uk-margin-top'
        />
        <TextField
          onChange={onChangeHandler}
          id='cpassword'
          label='Confirm Password'
          type='password'
          fullWidth
          className='uk-margin-top'
        />
        <div className='uk-text-center uk-margin-medium-top'>
          <Button onClick={onRegisterHandler} size='large' variant='outlined' block color='primary'>
            Register
          </Button>
        </div>
        <div className='uk-text-center uk-margin-top'>
          <p>
            Already have an account? <Link to='/login'>Click here to Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
