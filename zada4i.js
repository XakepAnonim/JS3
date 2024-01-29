// Задачи для решения
// 1
// arr1 = ['Привет, ', 'мир', '!']
// console.log(arr1[0] + arr1[1] + arr1[2])
// 2
// text = arr1[0] + arr1[1] + arr1[2]
// console.log(text)
// 3
// arr1[0] = 'Пока, '
// console.log(arr1[0] + arr1[1] + arr1[2])
// 4
// let obj = {
//     Петя: 50000,
//     Коля: 60000,
// };
//
// console.log('Зарплата Пети:', obj.Петя);
// console.log('Зарплата Коли:', obj.Коля);
// 5
// let arr = {
//     'ru':['голубой', 'красный', 'зеленый'],
//     'en':['blue', 'red', 'green']
// }
// console.log(arr['ru'][1])


// Работа с массивами
// 1
// let arr = ['a', 'b', 'c'];
// alert(arr);
// 2
// console.log(arr[0], arr[1], arr[2]);
// 3
// let arr1 = ['a', 'b', 'c', 'd'];
// console.log(`${arr1[0]}+${arr1[1]}, ${arr1[2]}+${arr1[3]}`);
// 4
// let arr2 = [2, 5, 3, 9];
// let result = arr2[0] * arr2[1] + arr2[2] * arr2[3];
// console.log(result);


// Объекты (ассоциативные массивы)
// 1
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(obj['c'])
// console.log(obj.c)
// 2
// let obj1 = {
//     Коля: 1000,
//     Вася: 500,
//     Петя: 200
// }
// console.log(obj1['Петя'])
// console.log(obj1.Коля)
// 3
// let weeks = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье',
// }
// console.log(weeks['1'])
// 4
// day = weeks['1']
// console.log(day)


// Многомерные массивы
// 1
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]
// console.log(matrix[1][0])
// 2
// let obj = {
//     js: ['jQuery', 'Angular'],
//     php: 'hello',
//     css: 'world'
// }
// console.log(obj.js[0])
// 3
// let weeks = {
//     'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// }
// console.log(weeks.ru[0])
// console.log(weeks.en[2])
// 4
// lang = 'ru'
// day = 1
//
// console.log(weeks[lang][day - 1])
// или
// if (weeks[lang] && day >= 1 && day <= 7) {
//     let Day = weeks[lang][day - 1];
//     console.log(Day)
// } else {
//     console.log('Ашибка')
// }
