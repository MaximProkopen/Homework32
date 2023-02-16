import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from "./Form.module.scss"

const FormAdd = (props) => {
    const { addTask } = props;
    const [taskName, setTaskName] = useState("");


    const handleFormSubmit = (event) => {
        event.preventDefault();

        const task = {
            name: taskName,
            checked: false,
            id: uuidv4()
        }
        
        addTask(task);
    }
    return (
        <form onSubmit={handleFormSubmit} className={styles.Form}>
            <input
                type="text"
                placeholder="Input"
                value={taskName}
                onChange={(event) => setTaskName(event.target.value)}
                required
                autoFocus
                className={styles.input}>

            </input>
            <button type="submit">Add item</button>
        </form>
    )
}

export default FormAdd