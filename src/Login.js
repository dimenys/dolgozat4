function LoginModal() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (username === 'admin' && password === 'admin') {
        
      } else {

      }
    }
  
    return (
      <div className="modal">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Felhasználónév" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Jelszó" />
        <button onClick={handleLogin}>Bejelentkezés</button>
      </div>
    );
  }