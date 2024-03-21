import renderFunc from './render';
import myTasks from './data';

const taskFunc = () => {

    function tasks(task, completed) {
        this.task = task;
        this.completed = completed;
    }

    function addTask() {
        const task = document.querySelector('.task').value;
        const completed = document.querySelector('.completed').value;

        let newTask = new tasks(task, completed);
        myTasks.push(newTask);
        renderFunc();
    }
}

export default taskFunc;
