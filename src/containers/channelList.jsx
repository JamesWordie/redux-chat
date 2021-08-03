import React from 'react';
import { connect } from 'react-redux';
import { newSelectedChannel } from '../actions';

class ChannelList extends React.Component {
  handleClick = (channel) => {
    this.props.newSelectedChannel(channel);
  }

  renderChannels = (channels) => {
    return channels.map((channel) => {
      let active = channel === this.props.selectedChannel ? 'active' : "";
      const name = '#' + channel.charAt(0).toUpperCase() + channel.slice(1);
      return (
        <button
          className={`btn btn-outline-success ${active}`}
          key={channel}
          onClick={() => this.handleClick(channel)}
        >
          {name}
        </button>
      )
    })
  }

  render() {
    return (
      <div className="d-flex flex-column mt-5">
        <div className="btn-group-vertical">
          {this.renderChannels(this.props.channels)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, { newSelectedChannel })(ChannelList)
