
import renderFunc from "./render";
import myTasks from './data';

const removeTask = (index) =>{

    myTasks.splice(index,1);
    renderFunc();
}
export default removeTask;