import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LEVELS } from "../../../models/levels.enum";

const RegisterTask = () => {
  const initialValues = {
    title: "",
    description: "",
    completed: false,
    level: LEVELS.BAJA,
  };

  // validation schema for register form
  const registerTaskSchema = Yup.object().shape({
    title: Yup.string()
      .min(6, "Title too short")
      .max(30, "Title too long")
      .required("Title is required"),
    description: Yup.string()
      .min(20, "Description too short")
      .required("Email is required"),
    completed: Yup.string().required("Status is required"),
    level: Yup.string()
      .oneOf(
        [LEVELS.BAJA, LEVELS.MEDIA, LEVELS.ALTA],
        "You must select a level"
      )
      .required("Level is required"),
  });

  return (
    <div>
      <h1>Register task form</h1>
      <Formik
        initialValues={initialValues}
        // validation schema
        validationSchema={registerTaskSchema}
        // onSubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
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
          <Form className="task_register_form">
            <label htmlFor="title">Task title</label>
            <Field
              id="title"
              type="text"
              name="title"
              placeholder="your task title"
            ></Field>
            {errors.title && touched.title && (
              <ErrorMessage name="title" component="p"></ErrorMessage>
            )}
            <label htmlFor="description">Task description</label>
            <Field
              id="description"
              type="text"
              name="description"
              placeholder="your task description"
            ></Field>
            {errors.description && touched.description && (
              <ErrorMessage name="description" component="p"></ErrorMessage>
            )}
            <label htmlFor="level">Task level</label>
            <Field component="select" id="level" name="level" multiple={false}>
              <option value={LEVELS.BAJA}>Baja</option>
              <option value={LEVELS.MEDIA}>Media</option>
              <option value={LEVELS.ALTA}>Alta</option>
            </Field>
            {errors.level && touched.level && (
              <ErrorMessage name="level" component="p"></ErrorMessage>
            )}
            <button type="submit">Register Task</button>
            {isSubmitting ? (
              <p className="loading">Sending your task...</p>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterTask;
