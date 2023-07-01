import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Dashboard from './Dashboard';

//Tutorial_1 = https://www.youtube.com/watch?v=Xcet6msf3eE stopped on 16 minute
//Tutorial_2 = https://www.youtube.com/watch?v=1PWDxgqLmDA

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return code ? <Dashboard code={code} /> : <Login />;
}

export default App;
