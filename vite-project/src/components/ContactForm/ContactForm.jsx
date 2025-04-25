import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          const newContact = {
            name: values.name,
            number: values.number,
          };

          onAdd(newContact);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="div" />
          </label>

          <label className={css.label}>
            Number
            <Field className={css.input} type="text" name="number" />
            <ErrorMessage className={css.error} name="number" component="div" />
          </label>

          <button className={css.btn} type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
}

