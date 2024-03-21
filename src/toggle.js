import renderFunc from "./render";
import myTasks from './data';

const toggleBtn = (index) => {

   myTasks[index].completed = !myTasks[index].completed;
    renderFunc();
   

}
export default toggleBtn;