import React from "react";
import Task from "../Task/Task";

const TaskList = (props) => {
    const {tasks, deleteTask} = props;
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} deleteTask={deleteTask} />
            ))}
        </div>
    )
}

export default TaskList
