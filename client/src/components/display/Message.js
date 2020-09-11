import React from 'react'

const Message = ({ content, createdAt, author }) => {
	return (
		<div className="message">
			<div className="message__author">{author}</div>
			<div className="message__content">{content}</div>
			<div className="message__createdAt">{createdAt}</div>
		</div>
	)
}

export default Message
