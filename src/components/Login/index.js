import { useState } from "react"
import { client } from '../../repository/client';
import Register from "../Register";

const Login = ({ onSuccess }) => {
  const [isRegisterScreen, setIsRegisterScreen] = useState(false);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onLogin = async () => {
    try {
      const { data } = await client.post('/api/v1/chat/login', {
        id,
        password: pw,
      })

      onSuccess(data);
    } catch (error) {
      alert("로그인 정보가 일치하지 않습니다")
    }

  }

  return isRegisterScreen ? <Register onSuccess={() => setIsRegisterScreen(false)} onNavigateToLogin={() => setIsRegisterScreen(false)} /> : (

    <div style={{ width: '100%' }}>
      <div style={{ marginTop: "40px", display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <div style={{ display: 'flex' }}>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '80px', marginRight: '12px' }}>아이디</div>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} style={{
            padding: '12px',
            borderRadius: '4px',
            border: 0,
            background: '#f8f8f8',
            width: '200px',
          }} />
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '80px', marginRight: '12px' }}>비밀번호</div>
          <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} style={{
            padding: '12px',
            borderRadius: '4px',
            border: 0,
            background: '#f8f8f8',
            width: '200px',
          }} />
        </div>
      </div>
      <div>
        <button style={{ width: '300px', borderRadius: '4px', border: 'none', padding: '12px', marginTop: '20px', cursor: 'pointer' }} onClick={onLogin}>로그인</button>
      </div>
      <div style={{ marginTop: '20px', cursor: 'pointer' }} onClick={() => setIsRegisterScreen(true)}>회원가입하러 가기</div>
    </div>
  )
}

export default Login;