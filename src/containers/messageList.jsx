import React from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';

class MessageList extends React.Component {
  // renderMessages = (messages) => {
  //   messages.map(message => {
  //     return <Message message={message} />
  //   })
  // }

  render() {
    const { messages } = this.props;
    return (
      <div className="row justify-content-center align-itesm-center mt-5">
        <div className="col-md-6">
          {
            messages.map((message) => {
              return <Message message={message} key={message.content} />
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { messages: state.messages }
}

export default connect(mapStateToProps, {})(MessageList);
