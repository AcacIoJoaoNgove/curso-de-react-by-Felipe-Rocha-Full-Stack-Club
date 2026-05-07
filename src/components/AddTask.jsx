;
import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 bg-slate-200 p-6 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digita o tilulo da tarefa "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Digita a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (title.trim() === "" || description.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
          }
          onAddTask(title, description);
          setDescription("");
          setTitle("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}
export default AddTask;
