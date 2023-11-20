import React, { useState, useRef, useEffect } from 'react';
import useSendMessage from '../../hooks/useSendMessage'
import './index.css'

/**
 * ChatMessage Schema
 * 
 * class ChatMessage {
 *   isMine: boolean;
 *   content: string;
 *   user: {
 *     name: string;
 *   }
 * }
 */
const ANU_BOT = {
  name: "ANU bot"
}

const ME = {
  name: "나"
}

const WELCOME_MESSAGE = {
  isMine: false,
  content: "안동대학교 챗봇입니다. 궁금한 내용을 물어보세요",
  user: ANU_BOT,
}

const LOADING_MESSAGE = {
  isMine: false,
  content: (
    <div className='chat-message-loading'>
      <div />
      <div />
      <div />
    </div>
  ),
  user: ANU_BOT,
}


const Main = ({ messages }) => {
  const [value, setValue] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const defaultMessages = messages.map(message => [{
      isMine: true,
      content: message.chat,
      user: ME
    }, {
      isMine: false,
      content: message.reply,
      user: ANU_BOT
    }]).flat();

    setChatMessages([...defaultMessages, WELCOME_MESSAGE])
  }, [messages])

  const { isLoading, sendMessage } = useSendMessage();

  const onSendMessage = async (message) => {
    if (isLoading) {
      return;
    }

    setValue('');

    setChatMessages(prev => [...prev, {
      isMine: true,
      content: message,
      user: ME,
    }])

    try {
      const { content: responseMessage } = await sendMessage(message);

      setChatMessages(prev => [...prev, {
        isMine: false,
        content: responseMessage,
        user: ANU_BOT,
      }])
    } catch (error) {
      setChatMessages(prev => [...prev, {
        isMine: false,
        content: '😕 서버 오류로 답변할 수 없습니다. 다시 한번 질문해주세요',
        user: ANU_BOT,
      }])
    }
  }

  useEffect(() => {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chatMessages, isLoading])

  return (
    <div className='chat-page'>
      <div className='chat-messages-container'>
        {chatMessages.map((chatMessage, index) => <ChatMessage key={index} chatMessage={chatMessage} />)}
        {isLoading && <ChatMessage chatMessage={LOADING_MESSAGE} />}
        <div ref={scrollRef} />
      </div>
      <div className='chat-message-input-container'>
        <input value={value} onChange={(e) => setValue(e.target.value)} onKeyUp={(e) => { e.code === 'Enter' && onSendMessage(value) }} />
        <button disabled={isLoading} onClick={() => onSendMessage(value)}>전송</button>
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
