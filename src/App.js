import './App.css';
import HomePage from './homePage';

function App() {
  return (
    <div>
      <div className="header">
        <div>
          <h1 className="flagHeader">Flag Picker</h1>
          This app will help you to learn flags around  the world in 3 steps.
        </div>
      </div>
      <HomePage />
    </div>
  );
}

export default App;
