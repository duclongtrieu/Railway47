import React from "react";
import { ReactstrapInput } from "reactstrap-formik";
import * as Yup from "yup";
import { FastField, Form, Formik } from "formik";
import { Button, Row, Col, InputGroupAddon } from "reactstrap";

const CustomFilter = (props) => {
  return (
    <Formik
      key={Date.parse(new Date())}
      initialValues={{
        minTotalMember: "",
        maxTotalMember: "",
      }}
      validationSchema={Yup.object({
        minTotalMember: Yup.number()
          .positive("Must be between than 0 ")
          .integer("Must be between than 0 "),

        maxTotalMember: Yup.number()
          .positive("Must be between than 0 ")
          .integer("Must be between than 0 "),
      })}
      onSubmit={(values) => {
        // this.props.onFilter(this.getValue());
        console.log(values);
      }}
      validateOnChange={true}
      validateOnBlur={true}
    >
      <Form>
        <fieldset className="filter-border">
          <legend className="filter-border">Filter</legend>
          <div className="control-group">
            <Row style={{ alignItems: "center" }}>
              <Col lg="auto">
                <label>Total Member:</label>
              </Col>

              <Col lg="2">
                <FastField
                  type="number"
                  bsSize="lg"
                  name="minTotalMember"
                  placeholder="Min"
                  component={ReactstrapInput}
                />
              </Col>
              {"-"}
              <Col lg="2">
                <FastField
                  type="number"
                  bsSize="lg"
                  name="maxTotalMember"
                  placeholder="Max"
                  component={ReactstrapInput}
                />
              </Col>
              <Col lg="2">
                <InputGroupAddon addonType="append" color="primary">
                  <Button type="submit">Filter!</Button>
                </InputGroupAddon>
              </Col>
            </Row>
          </div>
        </fieldset>
      </Form>
    </Formik>
  );
};

export default CustomFilter;
