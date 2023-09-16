import { useState } from 'react';

function useSendMessage() {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message) => {
    try {
      setIsLoading(true);

      const response = await fetch("https://anubot.azurewebsites.net/Chats/Bing", {
        method: "POST",
        body: JSON.stringify({ message }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json();


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