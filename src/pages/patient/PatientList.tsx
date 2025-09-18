import { useDispatch, useSelector } from "react-redux";

import { X } from "lucide-react";
import type { AppDispatch, RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { getPatients } from "../../store/slices/patientsSlice";
import { closeCard, openCard } from "../../store/slices/cardSlice";
import type { Patient } from "../../lib/types";

const PatientList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { patients, loading, error } = useSelector((state: RootState) => state.patient);
  const { isCardOpen, selectedPatient } = useSelector((state: RootState) => state.card)

  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    dispatch(getPatients());
  }, [dispatch]);

  const filteredPatients = patients.filter(patient => {
    const query = searchQuery.toLowerCase();
    return (
      patient.name.toLowerCase().includes(query) ||
      patient.email.toLowerCase().includes(query) ||
      patient.phone.toLowerCase().includes(query) ||
      (patient.username && patient.username.toLowerCase().includes(query))
    );
  });

  if (loading) return <p className="text-center mt-10">Loading patients...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="w-full flex-col relative h-full flex">
      <div className="p-2 flex justify-between items-center">
        <span className="font-semibold text-lg">Patient List</span>
        <input
          type="text"
          placeholder="Search by name, email, or phone"
          className="border border-gray-400 rounded-md px-2 py-1 text-sm w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 font-semibold border-b border-gray-400 text-left">
              <th className="p-2 w-[10%] whitespace-nowrap">Sr.no</th>
              <th className="p-2 w-[30%]  lg:table-cell whitespace-nowrap">Name</th>
              <th className="p-2 w-[30%] hidden lg:table-cell whitespace-nowrap">Email</th>
              <th className="p-2 w-[20%] hidden lg:table-cell whitespace-nowrap">Contact</th>
              <th className="p-2 w-[10%] text-center whitespace-nowrap">View</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, i) => (
                <List i={i} key={patient.name} patient={patient} />
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center p-4 text-gray-500">
                  No patients found matching your search
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isCardOpen && selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <button onClick={() => dispatch(closeCard())} className="absolute top-4 right-4 text-white hover:text-red-500">
              <X />
            </button>
            <PatientCard {...selectedPatient} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientList;




const List = ({ i, patient }: { i: number, patient: Patient }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { name, email, phone } = patient;

  return (
    <tr className={`border-b border-gray-300 ${i % 2 === 0 ? "bg-teal-300" : ""}`}>
      <td className="p-2 whitespace-nowrap">{i + 1}.</td>
      <td className="p-2  lg:table-cell truncate">{name}</td>
      <td className="p-2 hidden lg:table-cell truncate">{email}</td>
      <td className="p-2 hidden lg:table-cell truncate">{phone}</td>
      <td className="p-2 text-center">
        <button
          onClick={() => dispatch(openCard(patient))}
          className="border border-black px-2 rounded-md text-sm hover:scale-105"
        >
          view
        </button>
      </td>
    </tr>
  );
};
const PatientCard = ({ name, email, phone, username, }: Patient) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 backdrop-blur-sm">

      <div className="relative p-8 bg-white rounded-lg shadow-2xl w-full max-w-sm">

        <button
          onClick={() => dispatch(closeCard())}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Card content */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Patient Details</h2>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center">
              <span className="font-semibold w-20">Name:</span>
              <span className="flex-1">{name}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold w-20">Email:</span>
              <span className="flex-1">{email}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold w-20">Phone:</span>
              <span className="flex-1">{phone}</span>
            </div>
            {username && (
              <div className="flex items-center">
                <span className="font-semibold w-20">Username:</span>
                <span className="flex-1">{username}</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};