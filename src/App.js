import './App.css';
import TimeText from './TimeText';

function App() {
  return (
    <div className="App">
      <TimeText realHour={1.5} 
                targetHour={3}
                TimeType = "academic"/>
    </div>
  );
}

export default App;
