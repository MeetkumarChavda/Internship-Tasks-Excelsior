import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const HomePage = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/users");
                console.log(response.data.users); // Log all user objects from the response
                setUsers(response.data.users); // Store the user objects in the state        
            } catch (error) {
              console.error("Error fetching users:", error.message);
            }
          };
      
          fetchUsers(); // Call the async function      
    },[]);
   
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Users List</h1>
      
      <Link
        to="/signup"
        className=" bg-sky-600 text-white px-5 py-3 rounded-full hover:bg-sky-700 transition-all block text-center w-auto mx-auto"
      >
        Sign Up
      </Link>

      <div className="flex flex-col items-center gap-6">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white shadow-md rounded-lg p-6 w-full max-w-md border border-gray-200"
          >
            <p className="text-lg font-semibold text-gray-700 mb-1">Name: <span className="font-normal">{user.name}</span></p>
            <p className="text-lg font-semibold text-gray-700 mb-1">Email: <span className="font-normal">{user.email}</span></p>
            <p className="text-lg font-semibold text-gray-700 mb-1">Phone: <span className="font-normal">{user.phone}</span></p>
            <p className="text-lg font-semibold text-gray-700 mb-1">City: <span className="font-normal">{user.city}</span></p>
            <p className="text-lg font-semibold text-gray-700">State: <span className="font-normal">{user.state}</span></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage