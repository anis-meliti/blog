import React, { useState } from 'react';
import { Container, Col, Row, Form, Card, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

import './Signin.css';
import LoadingSpinner from '../LoadingPage/LoadingSpinner';

const SignIn = () => {
  // const dispatch = useDispatch();
  const [cred, setCred] = useState({
    login: '',
    password: '',
  });

  const onChangeHandler = (e) =>
    setCred({
      ...cred,
      [e.target.name]: e.target.value,
    });
  const addUser = () => {
    const { login, password } = cred;
    if (!login.length) return alert('Required field!');
    if (password.length < 6) return alert('password min length is 6 char');
  };
  return (
    <LoadingSpinner isLoading={true}>
      <div className='login-div page-header'>
        <div className='filter' />
        <Container>
          <Row>
            <Col className='ml-auto mr-auto' lg='6'>
              <Card className='card-body mt-5 ml-auto mr-auto text-muted'>
                <h3 className='title mx-auto'>Welcome</h3>
                <p className='text-center'>Login into your account</p>
                <hr />
                <Form className='register-form '>
                  <label htmlFor='login'>Login</label>
                  <Input
                    placeholder='Login'
                    type='text'
                    name='login'
                    onChange={onChangeHandler}
                  />
                  <label htmlFor='login'>Password</label>
                  <Input
                    placeholder='Password'
                    type='password'
                    name='password'
                    onChange={onChangeHandler}
                  />

                  <Button
                    block
                    className='btn-round mt-5'
                    color='danger'
                    onClick={addUser}
                  >
                    Login
                  </Button>
                </Form>
                <span className='text-muted text-center'>
                  Searching?<Link to='/register'>Create an account</Link>?
                </span>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </LoadingSpinner>
  );
};

export default SignIn;
