import React, { useEffect, useState } from "react";
import { handleSearch } from "../utils/debounce";

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch users on mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  return (
    <section className="py-16 bg-white" id="usersearch">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">User Search</h2>

        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search users by name..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value, users, setFilteredUsers);
            }}
          />
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="border rounded-lg p-6 shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-500">{user.company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserSearch;
