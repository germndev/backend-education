/* Написать объект ToDoList, 
который хранит в себе задачи 
{ ‘title’: ‘Помыть посуду’, id: 1, priority: 1 } и имеет методы:

- Добавить задачу
- Удалить задачу по id
- Обновить имя или приоритет по Id
- Отсортировать задачи по приоритету */

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

ToDoList.addTask('Попить', 2);
ToDoList.addTask('Поспать', 1);
ToDoList.addTask('Поесть', 3);
ToDoList.deleteTask(1);
ToDoList.updateTask(3, { priority: 2 });
ToDoList.sortTasks();
console.log(ToDoList.tasks);

