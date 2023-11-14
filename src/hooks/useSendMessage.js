import { useState } from 'react';
import { client } from "../repository/client";

function useSendMessage() {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message) => {
    try {
      setIsLoading(true);


      const { data } = await client.post("/api/v1/chat/webchat", {
        chat: message,
      });

      console.log(data)


      return {
        content: data.reply
      }
    }
    finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    sendMessage,
  }
}

export default useSendMessage;