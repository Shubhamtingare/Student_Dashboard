import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  useEffect(() => {
    axios
      .get("http://3.223.98.72:1337/api/students")
      .then((response) => {
        setStudents(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(students.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderField = (field) => (field ? field : "-");

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-4 text-red-500">Error loading data</div>
    );

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = students.slice(startIndex, endIndex);

  return (
    <div className="h-full overflow-auto">
      <table className="min-w-full divide-y divide-gray-200 rounded-b-lg">
        <thead className="bg-gray-50">
          <tr>
            {[
              "ID",
              "First Name",
              "Last Name",
              "Gender",
              "DOB",
              "Handicapped",
              "Blood Group",
              "Parent Contact No",
              "Parent Email ID",
              "Current Address",
              "City",
              "State",
              "Apartment Name",
            ].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentRows.map((student) => (
            <tr key={student.id} className="bg-white even:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{student.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {renderField(student.attributes.firstName)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {renderField(student.attributes.lastName)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {renderField(student.attributes.gender)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {renderField(student.attributes.dob)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {student.attributes.handicapped ? "Yes" : "No"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {renderField(student.attributes.bloodGroup)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {renderField(student.attributes.parentContactNo)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {renderField(student.attributes.parentEmailId)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {renderField(student.attributes.currentAddress)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {renderField(student.attributes.city)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {renderField(student.attributes.state)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {renderField(student.attributes.apartmentName)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-4 gap-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
        >
          <i class="fa-solid fa-less-than"></i>
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(students.length / rowsPerPage)}
          className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
        >
          <i class="fa-solid fa-greater-than"></i>
        </button>
      </div>
    </div>
  );
};

export default StudentTable;
