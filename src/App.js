import logo from './logo.svg';
import './App.css';
const axios = require('axios')

let handleClick = ()=>{
  axios.post("http://localhost:5000/api/user_data", {"email": "john@gmail.com"}).then(res=>{console.log(res)})
}

function App() {
  return (
    <div className="App">
      <input placeholder='insert email or phone here'/>
      <button onClick={handleClick}>BUTTON</button>
    </div>
  );
}

export default App;
