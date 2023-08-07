import React, { useState } from 'react';
import useFetchMain from "../../hooks/Main/useFetchMain";
import './index.css'

/**
 * ChatMessage Schema
 * 
 * class ChatMessage {
 *   isMine: boolean;
 *   content: string;
 *   createdAt: Date;
 *   user: {
 *     name: string;
 *   }
 * }
 */

const makeMsg = (msg) => {
  console.log(msg);
  return (
    <div>
      {msg}
    </div>
  )
}


const CHAT_MESSAGES = [
  {
    isMine: true,
    content: '안동대학교에 대해 궁금합니다.',
    createdAt: new Date(),
    user: {
      name: 'ANU',
    },
  },
  {
    isMine: true,
    content: 'world',
    createdAt: new Date(),
    user: {
      name: 'ANU',
    },
  },
  {
    isMine: true,
    content: 'world',
    createdAt: new Date(),
    user: {
      name: 'ANU',
    },
  },
  {
    isMine: true,
    content: 'world',
    createdAt: new Date(),
    user: {
      name: 'ANU',
    },
  },
  {
    isMine: true,
    content: 'world',
    createdAt: new Date(),
    user: {
      name: 'ANU',
    },
  },
  {
    isMine: true,
    content: 'world',
    createdAt: new Date(),
    user: {
      name: 'ANU',
    },
  },
  {
    isMine: true,
    content: 'world',
    createdAt: new Date(),
    user: {
      name: 'ANU',
    },
  },
  {
    isMine: true,
    content: 'world',
    createdAt: new Date(),
    user: {
      name: 'ANU',
    },
  },
  {
    isMine: false,
    content: '예시 답안을 적는 칸입니다.',
    createdAt: new Date(),
    user: {
      name: 'ANU',
    },
  },
  {
    isMine: false,
    content: 'hello',
    createdAt: new Date(),
    user: {
      name: 'ANU',
    },
  },
  {
    isMine: false,
    content: 'hello',
    createdAt: new Date(),
    user: {
      name: 'ANU',
    },
  },
  {
    isMine: false,
    content: 'hello',
    createdAt: new Date(),
    user: {
      name: 'ANU',
    },
  }
];

const Main = () => {
  const [value, setValue] = useState("");
  const [chatMessages, setChatMessages] = useState(CHAT_MESSAGES);

  const { handleSendMessage, sendMessageLoading, replyMessage } = useFetchMain();

  // TODO 나중에 USER_ID 가져오는 커스텀 훅 만들기
  const USER_ID = "6f0ec697-efc5-4178-366e-08db3a9230d7";

  return (
    <div className='chat-page'>
      <div className='chat-messages-container'>
        {chatMessages.map((chatMessage, index) => <ChatMessage key={index} chatMessage={chatMessage} />)}
      </div>
      <div className='chat-message-input-container'>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => handleSendMessage({ userId: USER_ID, message: value })}>전송</button>
      </div>
    </div >
  )
}

const ChatMessage = ({ chatMessage }) => {
  return (
    <div className={`chat-message ${chatMessage.isMine && 'my-chat-message'}`}>
      <div className='chat-message-user-name'>
        {chatMessage.user.name}
      </div>
      <div>
        <div className={`chat-message-content-wrapper`}>
          <div className='chat-message-content'>
            {chatMessage.content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
