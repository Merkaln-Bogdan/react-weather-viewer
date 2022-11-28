import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units;=metric&appid=${process.env.REACT_APP_API_KEY}`,
      )
      .then((res) => console.log(res));
  });
  return (
    <div className="App">
      <div>Hello</div>
    </div>
  );
}

export default App;
