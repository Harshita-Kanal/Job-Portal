import './App.css';
import Jobs from './components/Jobs'

function App() {

  const mockJobs = [
    {title: 'SWE-1', company: 'Google'},
    {title: 'SWE-1', company: 'Google'}
  ]

  return (
    <div className="App">
      <Jobs jobs = {mockJobs}/>
    </div>
  );
}

export default App;
