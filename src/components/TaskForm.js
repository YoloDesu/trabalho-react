import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import mockTasks from "../data/MockTasks";

const TaskForm = () => {
  const { index } = useParams();
  const [title, setTitle] = useState(index ? mockTasks[index].title : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index) {
      // Atualizar tarefa existente
      mockTasks[index].title = title;
    } else {
      // Adicionar nova tarefa
      mockTasks.push({ title });
    }
  };

  return (
    <div>
      <h2>{index ? "Editar Tarefa" : "Adicionar Tarefa"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título da Tarefa:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <button type="submit">Salvar</button>
      </form>
      <Link to="/">Voltar para a Lista de Tarefas</Link>
    </div>
  );
};

export default TaskForm;
