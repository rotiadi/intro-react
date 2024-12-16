import './FormTask.css'

const FormTask = () =>{
    return (<div className='formTask'>
                <form id="inputForm">
                    <input type="text" name="todo-name" id="todo-name" placeholder="Type a new todo"/>
                    <input type="submit" value="Add Todo" id="submit-btn" />
                </form>
            </div>)
}
 
export default FormTask;