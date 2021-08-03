import React from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';
import MessageBar from '../components/messageBar';
import { fetchMessages } from '../actions';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.list = React.createRef();
  }

  renderMessages = (messages) => {
    return messages.map(message => {
      return <Message message={message} key={message.id} />
    })
  }

  componentDidMount() {
    setInterval(() => {
      this.props.fetchMessages('general')
    }, 5000);

    clearInterval();
  }

  componentDidUpdate() {
    const { current } = this.list;
    current.scrollTop = current.scrollHeight;
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="row justify-content-center align-itesm-center mt-5">
        <div className="col-6 col-md-10" ref={ this.list } >
          {this.renderMessages(messages)}
        </div>
        <MessageBar />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { messages: state.messages }
}

export default connect(mapStateToProps, { fetchMessages })(MessageList);
