import { useState } from "react"
import { client } from '../../repository/client';

const Register = ({ onSuccess, onNavigateToLogin }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");

  const onRegister = async () => {
    try {
      if (pw.length < 8) {
        alert("비밀번호는 8글자보다 길어야합니다")
      }

      await client.post('/api/v1/chat/signup', {
        id,
        name,
        password: pw,
      })

      alert('회원가입 완료')
      onSuccess();
    } catch (error) {
      alert("다시 확인해주세요")
    }
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginTop: "40px", display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '80px', marginRight: '12px' }}>이름</div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{
            padding: '12px',
            borderRadius: '4px',
            border: 0,
            background: '#f8f8f8',
            width: '200px',
          }} />
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
          <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="비밀번호는 8글자보다 길어야합니다" style={{
            padding: '12px',
            borderRadius: '4px',
            border: 0,
            background: '#f8f8f8',
            width: '200px',
          }} />
        </div>
      </div>
      <div>
        <button style={{ width: '300px', borderRadius: '4px', border: 'none', padding: '12px', marginTop: '20px', cursor: 'pointer' }} onClick={onRegister}>회원가입</button>
      </div>
      <div style={{ marginTop: '20px', cursor: 'pointer' }} onClick={onNavigateToLogin}>계정이 있어요</div>
    </div>
  )
}

export default Register;