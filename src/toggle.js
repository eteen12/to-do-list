import renderFunc from "./render";
import myTasks from './data';

const toggleDone = (index) => {

   const task = myTasks[index];

   task.completed = !task.completed;

   renderFunc();
}
export default toggleDone;