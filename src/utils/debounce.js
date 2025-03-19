// Debounce function
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const handleSearch = debounce((query, usersList, setFilteredUsers) => {
  const filtered = usersList.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredUsers(filtered);
}, 300);
