import { Form, Field } from 'react-final-form'

const MessageForm = props => {
  const validate = (formValues) => {
    const errors = {};

    if (!formValues.message) {
      errors.message = 'You need to enter a message.';
    }

    return errors;
  }

  const renderInput = ({ input, label, meta }) => {
    return (
      <div style={{ width: 'inherit' }}>
        {/* <label className='form-label my-3'>{label}</label> */}
        <input placeholder={label} className='form-control mb-1' {...input} />
        {renderError(meta)}
      </div>
    );
  }

  // function to display the errors on the form if any persist
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="alert alert-danger" role="alert">
          <p className="text-muted my-0">{error}</p>
        </div>
      );
    }
  }

  const onSubmit = formValues => {
    props.onSubmit(formValues);
  }

  return (
    <Form
      // initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className='my-3 d-inline-flex justify-content-evenly align-items-baseline w-100'>
          <Field name='message' component={renderInput} label='Enter a Message' />
          <button className="btn btn-outline-primary ms-1">Send</button>
        </form>
      )}
    />
  );
}

export default MessageForm;
