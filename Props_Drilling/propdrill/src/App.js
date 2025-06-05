import { useState } from 'react';
import Top from './components/Top';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <div className="app">
      <h1>Prop Drilling</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter Your Name Here"
      />
      <Top userName={userName} />
    </div>
  );
}

export default App;