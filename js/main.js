
// todo Задание №1 
// Создайте объект в переменной programmer. Дайте объекту имя, 
// фамилию, возраст, язык программирования и зарплату. Выведите каждое свойство 
// объекта по очереди в консоль. 
 
// let programmer = { 
//   name: "madi", 
//   age: 16, 
//   language: "JavaScript", 
//   zar: 5000 
// }; 
 
// console.log(programmer.name) 
// console.log(programmer.age); 
// console.log(programmer.language); 
// console.log(programmer.zar); 
 
// todo Задание №2 
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел. 
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, 
// то разделите на 3. 
// Иначе прибавьте 10. 
// Для решения используйте функции: prompt и parseInt или опертаор +. 
// Ответ может быть и десятичным числом, и выведите это конечное число. 
 
// let num1 = parseInt(prompt("Введите первое число")); 
// let num2 = parseInt(prompt("Введите второе число")); 
// let sum = num1 + num2; 
 
// if (sum > 10 && sum < 20) { 
//   sum *= 5; 
// } else if (sum > 20 && sum < 50) { 
//   sum /= 3; 
// } else { 
//   sum += 10; 
// } 
 
// console.log(sum); 
 
// todo Задание №3 
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде ключ: значение 
// Ввод: 
// let aboutUs = [ 
//   ["name", "John"], 
//   ["type", "Snow"], 
//   ["place", "Bishkek"], 
//   ["languages", "JavaScript, Python"], 
//   ["simply", "the best!"] 
// ]; 
 
// Вывод: 
// name: John 
// type: Snow 
// place: Bishkek 
// languages: JavaScript, Python 
// simply: the best! 
 
// let aboutUs = [ 
//  ['name', 'John'], 
//  ['type', 'Snow'], 
//  ['place', 'Bishkek'], 
//  ['languages', 'JavaScript, Python'], 
//  ['simply', 'the best!'] 
// ] 
 
// for (let i = 0; i < aboutUs.length; i++) { 
//  console.log(`${aboutUs[i][0]}: ${aboutUs[i][1]}`) 
// } 
 
// todo Задание №4 
// Есть объект users в котором перечислен 
// возраст участников. Напишите код, 
// который выведет суммарный возраст 
// всех участников. Решите задачу через 
// цикл for...in. 
// let users = { 
//   John: 28, 
//   Mark: 30, 
//   David: 25, 
//   Richard: 42 
// }; 
 
// let users = { 
//  John: 28, 
//  Mark: 30, 
//  David: 25, 
//  Richard: 42 
// } 
 
// let sum = 0 
// for (let i in users) { 
//  sum += users[i] 
// } 
 
// console.log(sum) 
 
// todo Задание №5 
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента. 
// Первый аргумент- это массив. 
// Второй аргумент- это элемент который нужно удалить из массива. 
// Пример: let arr = [2, ‘hello’, true, ‘world’, 5, ‘js’] 
//     removeElem(arr,’world’) 
// Ответ: [2, ‘hello’, true, 5, ‘js’] 
 
// function removeElem(arr, element) { 
//  return arr.filter(el => el !== element) 
// } 
 
// let arr = [2, 'hello', true, 'world', 5, 'js'] 
// console.log(removeElem(arr, 'world')) 
 
// todo Задание №6 
// Напишите функцию palindrom(word), принимающая один аргумент word. 
// Функция, должна выводить в консоль true, если строка является палиндромом, в обратном случае false. 
// При этом нужно учитывать пробелы и регистр. 
// Палиндром – слово, которое читается одинаково слева направо и справа налево (например, ротор) 
 
// Пример №1: 
// Ввод: tenet 
// Ответ: true 
 
// Пример №2: 
// Ввод: my gym 
// Ответ: true 
 
// Пример №3 
// Ввод: nolan 
// Вывод: false 
 
// function palindrom(word) { 
//  let res = word.toLowerCase() 
//  return res === res.split('').reverse().join('') 
// } 
 
// console.log(palindrom('tenet')) 
// console.log(palindrom('my gym')) 
// console.log(palindrom('nolan')) 
 
// todo Задание №7 
// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение 
// аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль 
// аргументы в обратном порядке (использовать цикл while) 
 
// Например: 
 
// Ввод: functionLimit(50) 
// Вывод: 
// 50 
// 100 
// 200 
// 400 
// 800 
// 800 
// 400 
// 200 
// 100 
// 50 
 
// function functionLimit(value) { 
//  let results = [] 
//  while (value <= 1000) { 
//


//results.push(value) 
//   value *= 2 
//  } 
//  results.push(value) 
//  console.log(results.join(' ')) 
// } 
 
// functionLimit(50) 
 
// todo Задание №8 
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов. 
// Используйте метод filter() 
 
// let arr = ['hort', 'londfger', 'fdhdfhdfhfd', 'asdfa'] 
// let res = arr.filter(el => el.length > 5) 
// console.log(res) 
 
// todo Задание №9 
// Дан массив 
// let task2 = [10, 25, 25, 15, 5, 10]; 
// Выведите в alert сумму элементов 
// этого массива. 
// Используйте метод .forEach() 
 
// let task2 = [10, 25, 25, 15, 5, 10] 
// let sum = 0 
// task2.forEach(el => (sum += el)) 
// alert(sum) 
 
// todo Задание №10 
// Напишите функцию, определяющую 
// максимальное количество повторяющихся 
// элементов в массиве. 
// Массив для примера: 
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4]; 
 
// function checkTask(arr) { 
//  let count = {} 
//  let maxCount = 0 
 
//  arr.forEach(el => { 
//   count[el] = (count[el] || 0) + 1 
//   if (count[el] > maxCount) { 
//    maxCount = count[el] 
//   } 
//  }) 
 
//  return maxCount 
// } 
 
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4] 
// console.log(checkTask(task5)) 
 
// todo Задание №11 
// Дан массив nums = [8,1,2,2,3] 
// Напишите функцию, которая будет возвращать массив, в котором указано сколько есть чисел в массиве 
// меньше, чем каждый элемент массива. 
// Используйте метод map() 
// Пример №1: 
// Ввод: nums = [8,1,2,2,3] 
// Вывод: [4,0,1,1,3] 
// 4 элемента меньше чем 8 
// 0 элементов меньше чем 1 
// 1 элемент меньше чем 2 
// 1 элемент меньше чем 2 
// 3 элемента меньше чем 3 
 
// Пример №2: 
// Ввод: nums = [6,5,4,8] 
// Вывод: [2,1,0,3] 
 
// function chechTask(nums) { 
//  return nums.map(el => nums.filter(x => x < el).length) 
// } 
 
// let nums = [8, 1, 2, 2, 3] 
// console.log(chechTask(nums)) 
 
// todo Задание №12 
// Вам нужно поменять местами значения 
// переменных при помощи деструктуризации. 
//

// Задание №13 

