import { useState } from "react";

function Todo() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (value.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: value,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setValue("");
  }

  function completeTask(id) {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  return (
    <div className="task">
      <h1 className="mine">My Tasks</h1>

      <div className="input-section">
        <input
          className="tik"
          type="text"
          placeholder="What needs doing?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button className="addbutton" onClick={addTask}>
          Add Task
        </button>
      </div>

      <div className="btn-section">
        <button className="tric">All</button>

        <button className="active lain">Active</button>

        <button className="active lain">Completed</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No task Added yet</p>
        ) : (
          tasks.map((item) => (
            <div className="single-task" key={item.id}>
              <span
                onClick={() => completeTask(item.id)}
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.text}
              </span>

              <button onClick={() => deleteTask(item.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Todo;
