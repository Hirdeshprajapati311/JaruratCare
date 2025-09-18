import { useState, type ChangeEvent, type FormEvent,  } from 'react';
import type { Patient } from '../../lib/types';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { addPatient } from '../../store/slices/patientsSlice';

const AddPatient = () => {

  const dispatch = useDispatch<AppDispatch>();

  const [patientData, setPatientData] = useState<Patient>({
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPatientData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Saving new patient:", patientData);

    dispatch(addPatient(patientData))
   
    setPatientData({
      id: 0,
      name: '',
      username: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4 text-gray-800'>Add New Patient</h2>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Full Name</label>
            <input
              type='text'
              name='name'
              id='name'
              value={patientData.name}
              onChange={handleChange}
              placeholder="e.g., Jane Doe"
              required
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-2 transition duration-200'
            />
          </div>
          <div>
            <label htmlFor='username' className='block text-sm font-medium text-gray-700'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              value={patientData.username}
              onChange={handleChange}
              placeholder="e.g., jane_doe"
              required
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-2 transition duration-200'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email Address</label>
            <input
              type='email'
              name='email'
              id='email'
              value={patientData.email}
              onChange={handleChange}
              placeholder="e.g., jane.doe@example.com"
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-2 transition duration-200'
            />
          </div>
          <div>
            <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>Phone Number</label>
            <input
              type='tel'
              name='phone'
              id='phone'
              value={patientData.phone}
              onChange={handleChange}
              placeholder="e.g., 555-123-4567"
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-2 transition duration-200'
            />
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              className='px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-200'
            >
              Save Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatient;