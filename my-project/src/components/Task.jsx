const Task = (props) => {
  return (
    <div
      className="task flex justify-between"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <button
        onClick={() => props.completeTask(props.id)}
        className="bg-yellow-400 rounded-3xl"
      >
        Completed
      </button>
      <button
        onClick={() => props.deleteTask(props.id)}
        className="bg-gray-500 text-white mr-4 rounded-xl shadow-md"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
