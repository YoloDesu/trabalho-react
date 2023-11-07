import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Lista de Tarefas</Link>
          </li>
          <li>
            <Link to="/adicionar-tarefa">Adicionar Tarefa</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/adicionar-tarefa" element={<TaskForm />} />
          <Route path="/editar-tarefa/:index" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
