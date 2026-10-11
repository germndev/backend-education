/* Возьмите объект из предыдущего домашнего 
задания и последовательно 
примените все методы его на новый объект:*/

"use strict";

const ToDoList = {
    tasks: [{
        title: 'Помыть посуду',
        id: 1,
        priority: 5,
    }],
    nextId: 2,
    addTask: function (titleNew, priorityNum) {
        this.tasks.push({
            title: titleNew,
            id: this.nextId++,
            priority: priorityNum
        });
    },
    deleteTask: function (id) {
        if (this.tasks.find(el => el.id === id)) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        } else {
            console.log("deleteTask: Нет задачи с таким Id.")
        }
        
    },
    updateTask: function (id, { title, priority }) {
        const task = this.tasks.find(el => el.id === id);
        if (task) {
            title !== undefined ?  task.title = title : null;
            priority !== undefined ?  task.priority = priority : null;
        } else {
            console.log("updateTask: Нет задачи с таким Id.")
        }
        
    },
    sortTasks: function () {
        this.tasks.sort((a, b) => b.priority - a.priority);
    }
};


const newTask = {
    tasks: [{ 
        id: 1, 
        name: 'тест', 
        description: 'описание',
        order: 0
    }]
}


// Delete task
ToDoList.deleteTask.call(newTask, 1);

// Add task
newTask.nextId = 2;
ToDoList.addTask.call(newTask, 'Тест 2', 2);
ToDoList.addTask.call(newTask, 'Тест 3', 3);

// Sort tasks
ToDoList.sortTasks.call(newTask);

// Update tasks
ToDoList.updateTask.call(newTask, 2, {title: 'Тест 4'});

console.log(newTask.tasks);
