import renderFunc from "./render";
import myTasks from './data';


const btnFunc = () => {
    document.addEventListener('DOMContentLoaded', function() {
        let submitBtn = document.querySelector('.submit');
        let addBtn = document.querySelector('.add-btn');

        submitBtn.addEventListener('click', function () {

            let paremeters = document.querySelector('.parameters');
            paremeters.style.display="flex";
        });
        addBtn.addEventListener('click',function(event){

            event.preventDefault();

            const taskInput = document.querySelector('#task').value;
            const completedInput = document.querySelector('#completed').value;

            const newTask = {
                task: taskInput,
                completed: completedInput
            };

            myTasks.push(newTask);

            renderFunc();
        })
    });
}

export default btnFunc;
