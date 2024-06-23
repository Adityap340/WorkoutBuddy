import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar';
import WorkoutForm from './components/WorkoutForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        < Navbar />
        <div className='pages'>
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path='/add' element={<WorkoutForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
