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
        this.tasks = this.tasks.filter(task => task.id !== id);
    },
    updateTask: function (i, titleNew) {
        const task = this.tasks.find(el => el.id === i);
        task.title = titleNew;
    },
    sortTasks: function () {
        this.tasks.sort((a, b) => b.priority - a.priority);
    }
};

ToDoList.addTask('Попить', 2);
ToDoList.addTask('Поспать', 1);
ToDoList.addTask('Поесть', 3);
ToDoList.deleteTask(3);
ToDoList.updateTask(2, 'Погулять');
ToDoList.sortTasks();
console.log(ToDoList.tasks);

