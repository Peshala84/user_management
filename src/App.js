import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

    const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome to User Management System </h1>
       <button onClick={()=> navigate('/users')} className='users-button' >Users</button>
      </header>
    </div>
  );
}

export default App;
