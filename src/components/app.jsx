import React from 'react';
import MessageList from '../containers/messageList';
import ChannelList from '../containers/channelList';

const App = () => {
  return (
    <div className="app container h-100">
      <div className="row">
        <div className="col-md-4">
          <ChannelList />
        </div>
        <div className="col-md-8">
          <MessageList />
        </div>
      </div>
    </div>
  );
};

export default App;
