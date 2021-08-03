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
      this.props.fetchMessages(this.props.selectedChannel);
    }, 5000);

    clearInterval();
  }

  componentDidUpdate() {
    const { current } = this.list;
    current.focus();
    current.scrollTop = current.scrollHeight;
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="row justify-content-center align-itesm-center mt-5">
        <h3 className="mb-5">{`#${this.props.selectedChannel} Channel`}</h3>
        <div className="col-6 col-md-10" >
          {this.renderMessages(messages)}
        </div>
        <div ref={ this.list } id="messageBar">
          <MessageBar />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, { fetchMessages })(MessageList);
