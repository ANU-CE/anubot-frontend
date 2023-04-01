import React, { useState } from 'react';

const Main = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)}>
      </input>
      <button onClick={() => {
        fetch("https://anubot-backend.onrender.com/chat?message=" + value).then(response => { return response.json() }).then(body => { console.log(body) });
      }}
      >
        전송
      </button>
    </div>
  )
}

export default Main;