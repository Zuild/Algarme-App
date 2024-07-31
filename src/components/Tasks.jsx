import React, { useState } from 'react';
import SearchFilter from './SearchFilter'; 

const Tasks = () => {
  const initialTasks = [
    { id: 1, description: 'Complete project report', assignees: 'Shein Dihayco', deadline: '2024-08-01', status: 'Pending' },
    { id: 2, description: 'Update website', assignees: 'Louie Tahanlangit', deadline: '2024-08-02', status: 'Pending' },
    { id: 3, description: 'Team meeting', assignees: 'Zuild Zuild', deadline: '2024-08-04', status: 'Completed' },
    { id: 4, description: 'Client call', assignees: 'Ashie Aguipo', deadline: '2024-08-05', status: 'Pending' },
    { id: 5, description: 'Prepare presentation', assignees: 'Junrih Rizada', deadline: '2024-08-20', status: 'Completed' },
    { id: 6, description: 'Client call', assignees: 'Ashie Aguipo', deadline: '2024-08-25', status: 'Pending' },
    { id: 7, description: 'Code refactoring', assignees: 'Kerwin Tapic', deadline: '2024-08-30', status: 'Pending' },
    { id: 8, description: 'Testing new features', assignees: 'Kenneth Dinampo', deadline: '2024-09-04', status: 'Completed' },
    { id: 9, description: 'Write documentation', assignees: 'Ritch Birao', deadline: '2024-09-10', status: 'Pending' },
    { id: 10, description: 'Deploy to production', assignees: 'Zean Algarme', deadline: '2024-09-15', status: 'Completed' },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState(initialTasks);

  const toggleStatus = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Task List</h1>
      <SearchFilter tasks={tasks} setFilteredTasks={setFilteredTasks} />
      <ul className="list-group mt-3">
        {filteredTasks.map((task, index) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {index + 1}. {task.description}- {task.assignees}
              {task.status === 'Pending' ? <span> | Deadline: {task.deadline}</span> : null}
              <span className={`badge ms-3 ${task.status === 'Pending' ? 'bg-warning' : 'bg-success'}`}>
                {task.status}
              </span>
            </div>
            <button className="btn btn-outline-primary btn-sm" onClick={() => toggleStatus(task.id)}>
              Toggle Status
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
