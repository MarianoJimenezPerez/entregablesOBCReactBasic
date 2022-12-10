import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROLES } from "../../../models/roles.enum";

const RegisterUser = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };

  // validation schema for register form
  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username too short")
      .max(16, "Username too long")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password too short")
      .required("Password is required"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.legth > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Password must math"),
      })
      .required("You must confirm the password"),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a role")
      .required("Role is required"),
  });

  return (
    <div>
      <h1>Register form</h1>
      <Formik
        initialValues={initialValues}
        // validation schema
        validationSchema={registerSchema}
        // onSubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          // save data on localStorage
          localStorage.setItem("credentials", values);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlut,
        }) => (
          <Form>
            <label htmlFor="username">Username</label>
            <Field
              id="username"
              type="text"
              name="username"
              placeholder="your username"
            ></Field>
            {errors.username && touched.username && (
              <ErrorMessage name="username" component="div"></ErrorMessage>
            )}
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="youremail@gmail.com"
            ></Field>
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="your password"
            ></Field>
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}
            <label htmlFor="confirm">Password confirm</label>
            <Field
              id="confirm"
              type="password"
              name="confirm"
              placeholder="your password again"
            ></Field>
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div"></ErrorMessage>
            )}
            <button type="submit">Register Account</button>
            {isSubmitting ? <p>Sending your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterUser;
