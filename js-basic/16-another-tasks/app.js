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
    addTask: function (task) {
        this.tasks.push({
            ...task,
            id: this.nextId++
        });
    },
    deleteTask: function (id) {
        if (this.tasks.find(el => el.id === id)) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        } else {
            console.log("deleteTask: Нет задачи с таким Id.")
        }
        
    },
    updateTask: function (id, updates) {
        const task = this.tasks.find(el => el.id === id);

        if (task) {
            Object.assign(task, updates);
        } else {
            console.log("updateTask: Нет задачи с таким Id.")
        }
        
    },
    sortTasks: function (key) {
        this.tasks.sort((a, b) => b[key] - a[key]);
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
ToDoList.addTask.call(newTask, {
    name: 'Тест 2',
    description: '123',
    order: 2
});
ToDoList.addTask.call(newTask, {
    name: 'Тест 3',
    description: '456',
    order: 2
});

// Update tasks
ToDoList.updateTask.call(newTask, 2, {
    name: 'Тест 4',
    description: '789',
    order: 1
});

// Sort tasks
ToDoList.sortTasks.call(newTask, 'order');

console.log(newTask.tasks);
