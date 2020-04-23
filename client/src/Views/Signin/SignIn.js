import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import {
  Container,
  Col,
  Row,
  Form,
  Card,
  Input,
  Button,
  Alert,
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Signin.css';
import LoadingSpinner from '../../components/LoadingPage/LoadingSpinner';
import { logIn, isAuth } from '../../JS/actions/authActions';

const SignIn = () => {
  const dispatch = useDispatch();
  const [cred, setCred] = useState({
    email: '',
    password: '',
  });

  const onChangeHandler = (e) =>
    setCred({
      ...cred,
      [e.target.name]: e.target.value,
    });
  const [verif, setVerif] = useState(false);

  const addUser = () => {
    const { email, password } = cred;
    if (!email || !password) {
      return setVerif(true);
    } else {
      setVerif(false);
      dispatch(logIn(cred));
    }
  };
  const isAuthorized = useSelector((state) => state.authReducer.isAuth);
  const isLoading = useSelector((state) => state.authReducer.isLoading);
  useEffect(() => {
    localStorage.getItem('token') && dispatch(isAuth());
  }, [dispatch, isAuthorized]);

  return isAuthorized ? (
    <Redirect to='/profile' />
  ) : (
    <LoadingSpinner isLoading={isLoading}>
      <div className='login-div page-header'>
        <div className='filter' />
        <Container>
          <Row>
            <Col className='ml-auto mr-auto' lg='6'>
              <Card className='card-body mt-5 ml-auto mr-auto text-muted'>
                <h3 className='title mx-auto'>Welcome</h3>
                <p className='text-center'>Login into your account</p>
                <hr />
                {verif && (
                  <Alert color='danger'>You should fill all the fields</Alert>
                )}
                <Form className='register-form '>
                  <label htmlFor='email'>Email</label>
                  <Input
                    placeholder='Email ...'
                    type='email'
                    name='email'
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
SignIn.propTypes = {
  isLoading: PropTypes.bool,
  isAuthorized: PropTypes.bool,
};
export default SignIn;
