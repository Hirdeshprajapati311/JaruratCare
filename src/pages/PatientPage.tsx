import { useState } from 'react';
import PatientList from './patient/PatientList';
import AddPatient from './patient/AddPatient';

const PatientPage = () => {


  const [activeView, setActiveView] = useState('list')

  return (
    <div>
      <div className='grid grid-cols-2 p-2'>
        <button
          className={`p-2 font-semibold ${activeView === 'list' ? 'bg-teal-500 text-white   ' : 'bg-gray-200 text-gray-800'}`} onClick={() => setActiveView("list")}>All Patients</button>
        <button
          className={`p-2 font-semibold ${activeView === 'add' ? 'bg-teal-500 text-white' : '      bg-gray-200 text-gray-800 '}`} onClick={() => setActiveView("add")}>Add Patients</button>
      </div>
      {activeView === 'list'? <PatientList/>:<AddPatient/>}
      
    </div>
  );
}

export default PatientPage;
