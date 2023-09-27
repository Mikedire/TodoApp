import { useState } from "react";
import Task from "./Task";
// const TodoList = () => {
//   const [todoList, setTodoList] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const addTask = () => {
//     const task = {
//       id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//       taskName: newTask,
//       completed: false,
//     };
//     setTodoList(task.taskName !== "" ? [...TodoList, task] : todoList);

//     // const newTodoList = [...todoList, newTask];
//     // setTodoList(newTodoList);
//   };

//   const deleteTask = (id) => {
//     setTodoList(todoList.filter((task) => task.id !== id));
//   };

//   const completeTask = (id) => {
//     setTodoList(
//       todoList.map((task) => {
//         if (task.id === id) {
//           return { ...task, completed: true };
//         } else {
//           return task;
//         }
//       })
//     );
//   };

//   //   const deleteTask = (taskName) => {
//   //     const newTodoList = todoList.filter((task) => {
//   //       return task !== taskName;

//   //       //   if (task === taskName) {
//   //       //     return false;
//   //       //   } else {
//   //       //     return true;
//   //       //   }
//   //     });
//   //     setTodoList(newTodoList);
//   //   };

//   return (
//     <div className="App">
//       <div className="addTask">
//         <input onChange={handleChange} />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <div className="list">
//         {todoList.map((task) => {
//           return (
//             <div className="task">
//               <h1>{task.taskName}</h1>
//               <button onClick={() => deleteTask(task.id)}>X</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const TodoList = () => {
//   const [todoList, setTodoList] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const addTask = () => {
//     if (newTask !== "") {
//       const task = {
//         id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//         taskName: newTask,
//         completed: false,
//       };
//       setTodoList([...todoList, task]);
//       setNewTask("");
//     }
//   };

//   const deleteTask = (id) => {
//     setTodoList(todoList.filter((task) => task.id !== id));
//   };

//   const completeTask = (id) => {
//     setTodoList(
//       todoList.map((task) => {
//         if (task.id === id) {
//           return { ...task, completed: true };
//         } else {
//           return task;
//         }
//       })
//     );
//   };

//   return (
//     <div className="App">
//       <div className="addTask">
//         <input value={newTask} onChange={handleChange} />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <div className="list">
//         {todoList.map((task) => (
//           <Task
//             key={task.id} // Added a unique key prop for each Task component
//             taskName={task.taskName}
//             id={task.id}
//             completed={task.completed}
//             deleteTask={deleteTask}
//             completeTask={completeTask}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TodoList;

const TodoList1 = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        completed: false,
      };
      setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
    }
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask gap-4">
        <input onChange={handleChange} />
        <button onClick={addTask} className="bg-slate-400">
          {" "}
          Add Task
        </button>
      </div>
      <div className="list ">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList1;
