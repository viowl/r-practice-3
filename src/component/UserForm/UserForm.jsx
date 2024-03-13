import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// namespace import
import css from "./UserForm.module.css";

export default function UserForm() {
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const roleFieldId = useId();

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        role: "user",
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={usernameFieldId}>Username:</label>
          {/* <input type="text" name="username" id={usernameFieldId} /> */}
          <Field type="text" name="username" id={usernameFieldId} />
        </div>
        <div>
          <label htmlFor={emailFieldId}>Email:</label>
          <Field type="email" name="email" id={emailFieldId} />
        </div>
        <Field as="textarea" />

        <Field type="checkbox" />

        <div>
          <label htmlFor={roleFieldId}>Role:</label>

          <Field as="select" name="role" id={roleFieldId}>
            <option value="guest">Guest</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Field>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
