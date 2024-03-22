import renderFunc from './render';
import myTasks from './data';

const taskFunc = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const addButton = document.querySelector('.add-btn');
        addButton.addEventListener('click', () => {
            taskFunc();
        });
    });
   


    function tasks(task, completed) {
        this.task = task;
        this.completed = completed;
    }

    function addTask() {
        const taskInput = document.querySelector('#task').value;
        const completed = false;

        let newTask = new tasks(taskInput, completed);
        myTasks.push(newTask);
        renderFunc();
    }

    return {
        addTask
    };
}

export default taskFunc;

