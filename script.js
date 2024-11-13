// добавлять задачи,
// помечать задачи как выполненные,
// удалять задачи,
// отображать все задачи с их статусом (выполнена или нет).
// Создание списка задач:
// Ваша программа должна использовать массив для хранения списка задач.
// Каждая задача должна быть объектом с двумя полями:
// название задачи (name), которое будет строкой;
// статус задачи (completed), который будет булевым значением (true или false). Статус показывает, выполнена задача или нет.
// Добавление новой задачи:
// Вам нужно реализовать функцию, которая будет добавлять новую задачу в список.
// Функция должна принимать название задачи и добавлять её в массив задач со статусом "не выполнено" (completed: false).
// Если пользователь попытается добавить задачу с пустым названием, нужно вывести сообщение о том, что название задачи не может быть пустым.
// Пометка задачи как выполненной:
// Необходимо создать функцию, которая будет изменять статус задачи. Когда пользователь выполнит задачу, эта функция должна находить задачу по её названию в списке и менять её статус на completed: true (то есть отметить задачу как выполненную).
// Если задачи с таким названием в списке нет, программа должна сообщить об этом.

let taskList = [];

function addNewTaskToList(taskName) {
  if (taskName.trim()) {
    taskList.push({
      name: taskName.trim(),
      completed: false,
    });
  } else {
    console.log("Название задачи не может быть пустым");
  }
}

function changeTaskStatus(taskName) {
  let flagTask = false;

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].name === taskName) {
      taskList[i].completed = true;
      flagTask = true;
      break;
    }
  }

  if (!flagTask) {
    console.log("Задачи с таким названием в списке нет");
  }
}

function deleteTask(taskName) {
  // let flagTask = false;

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].name === taskName) {
    //   console.log(taskList);
      taskList.splice(i, 1);
    //   flagTask = true;
      break;
    } else {
      console.log("Задача не найдена");
    }
  }
}

function showTasks() {
    for (let i = 0; i < taskList.length; i++) {
        const element = taskList[i];
        let status = element.completed ? "Выполнена" : "Не выполнена";
        console.log(`Моя задача: ${element.name} - ${status}`);
        
    }
}

addNewTaskToList("Выучить JavaScript");
addNewTaskToList("Купить продукты");
addNewTaskToList("Сделать домашнее задание");
changeTaskStatus('Купить продукты');
deleteTask("Сделать домашнее задание");
showTasks();
console.log(taskList);
