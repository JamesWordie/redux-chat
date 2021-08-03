import React from 'react';
import MessageForm from './messageForm';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageBar extends React.Component {
  onSubmit = formValues => {
    this.props.createMessage(
      'general',
      this.props.currentUser,
      formValues.message
    );
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-12">
          <MessageForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps, { createMessage })(MessageBar)
