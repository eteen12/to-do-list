import removeTask from './remove';
import myTasks from './data';
import toggleBtn from './toggle';


const renderFunc = () => {
    let taskWrapper = document.querySelector('.task-wrapper');
    taskWrapper.innerHTML = '';
    for(let i = 0; i<myTasks.length;i++){
        let taskItem = myTasks[i];

        let userWrapper = document.createElement('div');
        userWrapper.classList.add('user-wrapper');
        taskWrapper.appendChild(userWrapper);

        let taskName = document.createElement('h2');
        taskName.classList.add('task-name');
        taskName.textContent= `${taskItem.task}`;
        userWrapper.appendChild(taskName);

        let taskComplete = document.createElement('p');
        taskComplete.classList.add('task-completed');
        taskComplete.textContent = taskItem.completed ? 'complete' : 'not complete yet';
        userWrapper.appendChild(taskComplete);
       

       let toggleComplete = document.createElement('button');
       toggleComplete.classList.add('toggle-complete');
       toggleComplete.textContent = taskItem.completed ? 'Mark as Complete': 'Mark as Not Complete'; 
       toggleComplete.addEventListener("click", function() {
        toggleBtn(i);
       })
       userWrapper.appendChild(toggleComplete);

       let removebtn = document.createElement('button');
       removebtn.classList.add('remove-btn');
       removebtn.textContent='Remove';
       removebtn.addEventListener("click",function(){
        removeTask(i);
       })
       userWrapper.appendChild(removebtn);


    }
}
export default renderFunc;