import React, { useState } from 'react';

const SearchFilter = ({ tasks, setFilteredTasks }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = tasks.filter(task =>
      task.description.includes(query) ||
      task.assignees.includes(query)
    );

    setFilteredTasks(filtered);
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search tasks..."
      value={searchQuery}
      onChange={handleSearch}
    />
  );
};

export default SearchFilter;
