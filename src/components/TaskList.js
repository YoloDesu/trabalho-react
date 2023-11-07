import React, { useState } from "react";
import { Link } from "react-router-dom";
import mockTasks from "../data/MockTasks";

const TaskList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleRemoveTask = (index) => {
    mockTasks.splice(index, 1);
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        placeholder="Pesquisar tarefas"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {mockTasks
          .filter((task) =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((task, index) => (
            <li key={index}>
              {task.title} -{" "}
              <Link to={`/editar-tarefa/${index}`} className="edit">
                Editar
              </Link>
              <button onClick={() => handleRemoveTask(index)}> Remover</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TaskList;
