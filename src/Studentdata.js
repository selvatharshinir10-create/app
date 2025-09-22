import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Studentdata.css';

function Studentdata() {
  const [studentid, setId] = useState('');
  const [studentname, setName] = useState('');
  const [studentaddress, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [students, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Load();
  }, []);

  const Load = async () => {
    try {
      const result = await axios.get('http://localhost:8081/api/v1/student/getall', {
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
      });
      setUsers(result.data);
    } catch (error) {
      alert('Session expired. Please log in again.');
      localStorage.removeItem('authToken');
      navigate('/login');
    }
  };

  const logout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('authToken');
      navigate('/login');
    }
  };

  return (
    <div className="student-container">
      <h1>Student Details</h1>
      <button className="logout-button" onClick={logout}>Logout</button>

      <div className="student-form">
        <input type="text" placeholder="Name" value={studentname} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Address" value={studentaddress} onChange={(e) => setAddress(e.target.value)} />
        <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <button onClick={() => console.log('Add Student logic')}>Add Student</button>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.studentname}</td>
              <td>{student.studentaddress}</td>
              <td>{student.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Studentdata;
