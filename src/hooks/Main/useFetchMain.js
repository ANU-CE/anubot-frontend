import { useCallback, useState } from 'react'
import { sendMessage } from '../../repository/messages.api';

const useFetchMain = () => {
  const [sendMessageLoading, setSendMessageLoading] = useState(false);
  const [replyMessage, setReplyMessage] = useState(undefined)

  const handleSendMessage = useCallback(async ({ userId, message }) => {
    setSendMessageLoading(true)
    await sendMessage({ userId, message }).then(({ data }) => {
      setSendMessageLoading(false);
      setReplyMessage(data.reply);
    }).error(err => {
      console.log('error', err);
    })

    setSendMessageLoading(false)
  }, []);

  // message조회 함수 <--- messageStack <--- logic

  return {
    handleSendMessage,
    sendMessageLoading,
    replyMessage
  }
}

export default useFetchMain;