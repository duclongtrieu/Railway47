import React, { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { FastField, Form, Formik } from "formik";
import { ReactstrapInput } from "reactstrap-formik";
import * as Yup from 'yup';
import UserApi from "../../api/UserApi";
const ResetPassword = (props) => {

  const [isopenModals, setOpenModals] = useState(false);

  const [email, setEmail] = useState("");

  const [isDisablResendButton, setDisablResendButton] = useState(false);

  const resendEmailToResetpassword = async () => {
    setDisablResendButton(true);
    await UserApi.resendEmailToResetpassword(email);
    setDisablResendButton(false);
  }

  const redirectToLogin = () => {
    props.history.push("/auth/sign-in");
  }

  return (
  <React.Fragment>
    <div className="text-center mt-4">
      <h1 className="h2">Reset password</h1>
      <p className="lead">Enter your email to reset your password.</p>
    </div>
    <Formik
        initialValues={{
          email: ''
        }}
        validationSchema={
          Yup.object().shape({

            email: Yup.string()
              .email('Invalid email address')
              .required('Required')
              .test('checkExistsEmail', 'This Email is already registed.', async email => {
                // call api
                const isExists = await UserApi.existsByEmail(email);
                return isExists;
              })
          })
        }

        onSubmit={
          async (values) => {
            try {
              // call api
              await UserApi.requestResetPassword(values.email);
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
                      label="Email"
                      type="email"
                      bsSize="lg"
                      name="email"
                      placeholder="Enter your email"
                      component={ReactstrapInput}
                    />
                  </FormGroup>
            <div className="text-center mt-3">
                <Button type= "submit" color="primary" size="lg" disable={isSubmitting}>
                  Reset password
                </Button>
            </div>
          </Form>
        </div>
      </CardBody>
    </Card>
      )}
    </Formik>

    <Modal isOpen={isopenModals} >
        {/* header */}
        <ModalHeader>
          You need to confirm reset password
        </ModalHeader>

        {/* body */}
        <ModalBody>
          <p className="mb-0">
            We have sant an email to <b>{email}</b>.
          </p>
          <p className="mb-0">
            Please check youe mail to reset password
          </p>
        </ModalBody>

        {/* footer */}
        <ModalFooter>
          <Button color="primary" onClick={resendEmailToResetpassword} disable={isDisablResendButton}>
            Resend
          </Button>{" "}
          <Button color="primary" onClick={redirectToLogin}>
            Login
          </Button>
        </ModalFooter>
    </Modal>
  </React.Fragment>
)};

export default ResetPassword;
