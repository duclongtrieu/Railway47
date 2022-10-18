
import React, { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  FormGroup, Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";

import { FastField, Form, Formik } from "formik";
import { ReactstrapInput } from "reactstrap-formik";
import * as Yup from 'yup';
import UserApi from "../../api/UserApi";
import { withRouter } from "react-router-dom";

const SignUp = (props) => {

  const [isopenModals, setOpenModals] = useState(false);

  const [email, setEmail] = useState("");

  const [isDisablResendButton, setDisablResendButton] = useState(false);

  const resendEmailToActiveAccount = async () => {
    setDisablResendButton(true);
    await UserApi.resendEmailToActiveAccount(email);
    setDisablResendButton(false);
  }

  const redirectToLogin = () => {
    props.history.push("/auth/sign-in");
  }

  return (
    <>
      <div className="text-center mt-4">
        <h1 className="h2">Get started</h1>
        <p className="lead">
          Start creating Account to experience in VTI Academy.
        </p>
      </div>

      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={
          Yup.object().shape({
            firstname: Yup.string()
              .max(50, 'Must be less than 50 characters')
              .required('Required'),

            lastname: Yup.string()
              .max(50, 'Must be less than 50 characters')
              .required('Required'),

            username: Yup.string()
              .min(6, 'Must be between 6 and 50 characters or greater')
              .max(50, 'Must be between 6 and 50 characters or greater')
              .required('Required')
              .test('checkExistsUsername', 'This Username is already registed.', async username => {
                // call api
                const isExists = await UserApi.existsByUsername(username);
                // const isExists = false;
                return !isExists;
              }),

            email: Yup.string()
              .min(6, 'Must be between 6 and 50 characters or greater')
              .max(50, 'Must be between 6 and 50 characters or greater')
              .email('Invalid email address')
              .required('Required')
              .test('checkExistsEmail', 'This Email is already registed.', async email => {
                // call api
                const isExists = await UserApi.existsByEmail(email);
                // const isExists = false;
                return !isExists;
              }),

            password: Yup.string()
              .min(6, 'Must be between 6 and 50 characters or greater')
              .max(50, 'Must be between 6 and 50 characters or greater')
              .required('Required'),

            confirmPassword: Yup.string()
              .min(5, 'Must be 5 characters or greater')
              .required('Required')
              .when("password", {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Confirm Password do not match"
                )
              })
          })
        }

        onSubmit={
          async (values) => {
            try {
              // call api
              await UserApi.create(
                values.firstname,
                values.lastname,
                values.username,
                values.email,
                values.password
              );
              setEmail(values.email);
              setOpenModals(true);
            } catch (error) {
              props.history.push("/auth/500");
            }
          }
        }
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({isSubmitting}) => (
          <Card>
            <CardBody>
              <div className="m-sm-4">
                <Form>
                  <FormGroup>
                    <FastField
                      label="First Name"
                      type="text"
                      bsSize="lg"
                      name="firstname"
                      placeholder="Enter your first name"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="Last Name"
                      type="text"
                      bsSize="lg"
                      name="lastname"
                      placeholder="Enter your last name"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="UserName"
                      type="text"
                      bsSize="lg"
                      name="username"
                      placeholder="Enter your username"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="Email"
                      type="email"
                      bsSize="lg"
                      name="email"
                      placeholder="Enter your email"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="Password"
                      type="password"
                      bsSize="lg"
                      name="password"
                      placeholder="Enter password"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="Confirm Password"
                      type="password"
                      bsSize="lg"
                      name="confirmPassword"
                      placeholder="Enter confirm Password"
                      component={ReactstrapInput}
                    />
                  </FormGroup>
                  <div className="text-center mt-3">
                    <Button type='submit' color="primary" size="lg" disable={isSubmitting}>
                      Sign up
                    </Button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>
        )
        }
      </Formik>

      <Modal isOpen={isopenModals} >
        {/* header */}
        <ModalHeader>
          You need to confirm your account
        </ModalHeader>

        {/* body */}
        <ModalBody>
          <p className="mb-0">
            We have sant an email to <b>{email}</b>.
          </p>
          <p className="mb-0">
            Please check youe mail to active account
          </p>
        </ModalBody>

        {/* footer */}
        <ModalFooter>
          <Button color="primary" onClick={resendEmailToActiveAccount} disable={isDisablResendButton}>
            Resend
          </Button>{" "}
          <Button color="primary" onClick={redirectToLogin}>
            Login
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
};

export default withRouter(SignUp);

