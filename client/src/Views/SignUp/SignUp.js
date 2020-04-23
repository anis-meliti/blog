import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
import './SignUp.css';
import { register } from '../../JS/actions/authActions';
import LoadingSpinner from '../../components/LoadingPage/LoadingSpinner';

const SignUpForm = () => {
  const [cred, setCred] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [verif, setVerif] = useState(false);
  const onChangeHandler = (e) =>
    setCred({ ...cred, [e.target.name]: e.target.value });
  const dispatch = useDispatch();
  const onClickHandler = (e) => {
    e.preventDefault();
    const { email, name, password } = cred;
    if (!email || !name || !password) {
      return setVerif(true);
    } else setVerif(false);
    dispatch(register(cred));
  };
  const isLoading = useSelector((state) => state.authReducer.isLoading);
  const user = useSelector((state) => state.authReducer.user);
  return user ? (
    <Redirect to='/signin' />
  ) : (
    <LoadingSpinner isLoading={isLoading}>
      <div className='main-div page-header'>
        <div className='filter' />
        <Container>
          {verif && (
            <Alert color='danger'>You should fill all the fields</Alert>
          )}
          <Row>
            <Col className='ml-auto mr-auto' lg='6'>
              <Card className='card-register mt-5 ml-auto mr-auto'>
                <h3 className='title mx-auto'>Welcome</h3>
                <Form className='register-form' name='formCred'>
                  <label htmlFor='email'>Email</label>
                  <Input
                    placeholder='Email...'
                    type='text'
                    name='email'
                    onChange={onChangeHandler}
                  />
                  <label htmlFor='name'>Name</label>
                  <Input
                    placeholder='Full Name...'
                    type='text'
                    name='name'
                    onChange={onChangeHandler}
                  />
                  <label htmlFor='password'>Password</label>
                  <Input
                    placeholder='Password...'
                    type='password'
                    name='password'
                    onChange={onChangeHandler}
                  />

                  <Button
                    block
                    className='btn-round'
                    color='danger'
                    type='submit'
                    onClick={onClickHandler}
                  >
                    Register
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </LoadingSpinner>
  );
};

export default SignUpForm;
