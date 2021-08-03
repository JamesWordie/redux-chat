import React from 'react';
import MessageList from '../containers/messageList';
import ChannelList from '../containers/channelList';

const App = () => {
  return (
    <div className="app container h-100"  style={{ backgroundColor: 'black'}}>
      <div className="row">
        <div className="col-md-4  bg-light p-5" style={{ height: '100vh' }}>
          <ChannelList />
        </div>
        <div className="col-md-8  bg-white p-5" style={{ height: '100vh' }}>
          <MessageList />
        </div>
      </div>
    </div>
  );
};

export default App;
