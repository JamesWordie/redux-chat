import React from 'react';
import ReactTimeAgo from 'react-time-ago';

const Message = (props) => {
  const { author, content, created_at } = props.message;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-inline-flex justify-content-between align-items-center w-100">
          <div className="d-flex flex-column justify-content-center">
            <div className="card-title text-muted">{author}</div>
            <div className="card-subtitle">{content}</div>
          </div>
          <div className="card-text text-muted">
            <ReactTimeAgo date={new Date(created_at)} locale='en-UK' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message;
