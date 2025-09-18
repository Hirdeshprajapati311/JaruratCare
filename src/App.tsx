import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PatientPage from './pages/PatientPage';
import About from './pages/About';
import Layout from './pages/Layout';

const App = () => {
  return (
    <div className='w-screen h-screen flex'>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path='patient' element={<PatientPage />} />
            <Route path='about' element={<About />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
