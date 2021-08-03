import React from 'react';

const Message = (props) => {
  const { author, content, created_at } = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="card my-3">
      <div className="card-body">
        <div className="d-inline-flex justify-content-between align-items-center w-100">
          <div className="d-flex flex-column justify-content-center">
            <div className="card-subtitle">{content}</div>
            <div className="card-title text-muted">{author}</div>
          </div>
          <div className="card-text text-muted">{time}</div>
        </div>
      </div>
    </div>
  )
}

export default Message;
