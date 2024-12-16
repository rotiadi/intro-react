import './TaskList.css'

const TasksList = () => {
    return (
        <div className="taskList">
            <h4>Todos</h4>
        
            <div className="task">
                <input type="checkbox" id="task1" name="task1" value="task1"/>
                <label htmlFor="task1">Learn React</label>
            </div>
            <div className="task">
                <input type="checkbox" id="task2" name="task2" value="task2"/>
                <label htmlFor="task2">Be Awesome!</label>
            </div>         
        
        </div>
    );
}

export default TasksList;