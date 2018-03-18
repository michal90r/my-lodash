import _ from 'lodash';

const proj = "isEmpty, camelCase, get, isArray, isEmpty, map, cloneDeep, get, isEmpty, isEqual, camelCase, cloneDeep, find, isEmpty, isEqual, last, noop, uniq, truncate, " +
  "get, isEqual, last, first, forEach, get, isEmpty, kebabCase, last, uniqBy, get, sortBy, uniqBy, isEmpty, isNumber, map, forEach, isEmpty, uniq, get, find, isEmpty, capitalize, get, camelCase," +
  " find, forEach, isEmpty, map, isEmpty, isNumber, isUndefined, get, camelCase, get, isArray, isEmpty, map, cloneDeep, orderBy, forEach, camelCase, cloneDeep, find, isEmpty, isEqual, last, noop, uniq, " +
  "findIndex, last, uniq, cloneDeep, flatMap, uniq, chain, groupBy, map, flattenDeep, isEqual, sortBy, get, isNaN, forEach, first, forEach, get, isEmpty, kebabCase, last, uniqBy, cloneDeep, get, " +
  "sortBy, uniqBy, isEmpty, isNumber, map, camelCase, cloneDeep, startCase, template, throttle, forEach, isEmpty, uniq, get, find, isEmpty, capitalize, get, isEmpty,isNumber, isUndefined, get," +
  " camelCase, cloneDeep, find, isEmpty, map, merge, debounce, camelCase, capitalize, forEach, get, isEmpty, last, map, set";

const projArr = proj.split(", ");

const uniqProjArr = _.uniq(projArr);

const uniqLodash = [
  'isEmpty',
  'camelCase',
  'get',
  'isArray',
  'map',
  'cloneDeep',
  'isEqual',
  'find',
  'last',
  'noop',
  'uniq',
  'truncate',
  'first',
  'forEach',
  'kebabCase',
  'uniqBy',
  'sortBy',
  'isNumber',
  'capitalize',
  'isUndefined',
  'orderBy',
  'findIndex',
  'flatMap',
  'chain',
  'groupBy',
  'flattenDeep',
  'isNaN',
  'startCase',
  'template',
  'throttle',
  'merge',
  'debounce',
  'set'
];

// Useful for checking if object is empty

// + checking if object is empty
// + Useful when you don't know what kind of collection you will receive.
// - but situation when you don't know what kind of data you receive is dangerous
// - be careful with values witch aren't collection

/*
const isEmptyTest = [true, 1, [1,2,3], {'a': 1}];
console.log('isEmpty' isEmptyTest.map(el => _.isEmpty(el)));
if({}){
  console.log('is defined');
}
console.log('is empty ', Object.keys({}).length > 0);
*/



//Useful because I even don't want to try when I am looking at this examples
// The same with camelCase, snakeCase and others. Lowercase and uppercase can be handled by vanilla JS
// The same with capitalize

// + well documented and naming is sooo obvious
/*
const camelCaseTest =  ['Foo Bar', '--foo-bar--', '__FOO_BAR__'];

console.log('lodash camelCase', camelCaseTest.map(data => _.camelCase(data)));
*/
//
// const upper = 'aaa'.toUpperCase();
// console.log(upper);
//
// const lower = upper.toLowerCase();
// console.log(lower);


//sometimes useful

// + don't have to check if previous values in object are defined, nice returning of undefined without throwing errors
// - for simple getting defined values better solution is to just specify path without wrapping it into string

/*
const object = { 'a': [{ 'b': { 'c': 3 } }] };

console.log(_.get(object, 'a[0].b.c'));
console.log(_.get(object, 'a[0].b.c'));
console.log(_.get(object, ['a', 0, 'b', 'c']));
console.log(_.get(object, 'a.b.c', 'default'));
console.log(_.get(object, 'a.b.c'));

console.log(object.a[0].b.c);
console.log(object && object.a && object.a.b && object.a.b.c ? object.a.b.c : 'default');
*/


// this is not useful at all

// - native Array.prototype have equivalent method

/*
console.log(_.isArray([1, 2, 3]));
console.log(_.isArray('abc'));
console.log(_.isArray(_.noop));

console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray('abc'));
console.log(Array.isArray(_.noop));
*/


// _.forEach alias for each  <-- not needed
// - you can do this in ease way with vanilla JS
// + maybe syntax for iterate over object is easier but syntax from ES7 is also not so bad

// const obj = { 'a': 1, 'b': 2 }
//
// _.forEach([1, 2], function(value) {
//   console.log(value);
// });
// // => Logs `1` then `2`.
//
// _.forEach(obj, function(value, key) {
//   console.log(key);
// });
//
// Object.entries(obj).forEach(([key, val]) => console.log(key));


// _.map  <-- not needed
// - you can do this in ease way with vanilla JS
// + maybe syntax for iterate over object is easier but syntax from ES7 is also not so bad
// function square(n) {
//   return n * n;
// }
//
// console.log(_.map([4, 8], square));
//
// console.log(_.map({'a': 4, 'b': 8}, square));
// // => [16, 64] (iteration order is not guaranteed)
//
// var users = [
//   { 'user': 'barney' },
//   { 'user': 'fred' }
// ];
//
// // The `_.property` iteratee shorthand.
// console.log(_.map(users, 'user'));
// // => ['barney', 'fred']
//
// console.log([4, 8].map((n) => square(n)));
//
// const obj = {'a': 4, 'b': 8};
//
// //ES6 way
// let output = [];
// for(const el of Object.keys(obj)) {
//   output.push(square(obj[el]))
// }
// console.log(output);
//
// //ES7 way
// Object.entries(obj).map(([key, val]) => square(val));




// _.cloneDeep ease handled by vanilla JS. Not needed
//
// const objects = [{ 'a': 1 }, { 'b': 2 }];
//
// const deep = _.cloneDeep(objects);
// const my = [...objects];
//
// console.log(deep[0] === objects[0]);
// console.log(my === objects[0]);





// isEqual
// + useful for checking arrays and more convenient than vanilla JS checking for objects
//
// let object = { 'a': 1 };
// let other = { 'a': 1 };
//
// let arr1 = [1, 2];
// let arr2 = [1, 2];
//
// console.log(_.isEqual(object, other));
// // => true
//
// console.log(object === other);
// // => false
//
// console.log(JSON.stringify(object) === JSON.stringify(other));
//
// console.log(arr1 === arr2)
// console.log(_.isEqual(arr1, arr2));



// Unnecessary because JS find do exactly the same thing
// var users = [
//   { 'user': 'barney',  'age': 36, 'active': true },
//   { 'user': 'fred',    'age': 40, 'active': false },
//   { 'user': 'pebbles', 'age': 1,  'active': true }
// ];
//
// console.log(_.find(users, function (o) {
//   return o.age < 40;
// }));
// console.log(users.find(e => e.age < 40));
// // => object for 'barney'
//
// // The `_.matches` iteratee shorthand.
// console.log(_.find(users, {'age': 1, 'active': true}));
// // => object for 'pebbles'
// console.log(users.find(e => e.age === 1 && e['active']));
// The `_.matchesProperty` iteratee shorthand.
// console.log(_.find(users, ['active', false]));
// // => object for 'fred'
// console.log(users.find(e => !e.active));
// The `_.property` iteratee shorthand.
// _.find(users, 'active');
// => object for 'barney'



// lodash last is more obvious for first glance so it can provide more readable code style
// const arr = [1, 2, 3];
// console.log(_.last([1, 2, 3]));
// console.log(arr[arr.length - 1]);




// this, method is for returning undefined <-- I don't get why this function even exist
// console.log(_.noop());
// console.log(undefined);


// it is possible to do this in vanilla JS but lodash uniq is more obvious
// const arr = [2, 1, 2];
// _.uniq([2, 1, 2]);
// // => [2, 1]
//
// console.log([...new Set(arr)]);
//
//

//
// Uniq by with arrays and obj are complicated to write by your own. Lodash do the job
// const arr = [2.1, 1.2, 2.3];
// _.uniqBy(arr, Math.floor);
// // => [2.1, 1.2]
//
//
// const arrOfObj = [{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }]
// // The `_.property` iteratee shorthand.
// _.uniqBy(arrOfObj, 'x');
// // => [{ 'x': 1 }, { 'x': 2 }]



// useful only when you want to specify separator. It allow you to truncate string in specific place.
// const string = 'hi-diddly-ho there, neighborino'
// console.log(_.truncate(string));
// console.log(string.substring(0, 27) + '...');
// // => 'hi-diddly-ho there, neighbo...'
//
//
// _.truncate('hi-diddly-ho there, neighborino', {
//   'length': 24,
//   'separator': ' '
// });
// console.log(string)
// // => 'hi-diddly-ho there,...'
//
// _.truncate('hi-diddly-ho there, neighborino', {
//   'length': 24,
//   'separator': /,? +/
// });
// // => 'hi-diddly-ho there...'
//
// console.log(_.truncate('hi-diddly-ho there, neighborino', {
//   'omission': ' [...]'
// }));



// first is alias for head
// can be useful
// lodash first is more explicit than getting first element of array
// const arr = [1, 2, 3];
// console.log(_.head(arr));
// console.log(_.first(arr));
//
// console.log(arr[0]);


// sortBy
// Don't needed at all. Array.prototype.sort works very well
// var users = [
//   { 'user': 'fred',   'age': 48 },
//   { 'user': 'barney', 'age': 36 },
//   { 'user': 'fred',   'age': 40 },
//   { 'user': 'barney', 'age': 34 }
// ];
//
// _.sortBy(users, [function(o) { return o.user; }]);
// // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
//
// _.sortBy(users, ['user', 'age']);
// // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
//
// console.log(users.sort((a, b) => {
//   return a.user > b.user
// }));
//
// console.log(users.sort((a, b) => {
//   return a.age > b.age
// }));


// both are ok
// var users = [
//   { 'user': 'fred',   'age': 48 },
//   { 'user': 'barney', 'age': 34 },
//   { 'user': 'fred',   'age': 40 },
//   { 'user': 'barney', 'age': 36 }
// ];
//
// // Sort by `user` in ascending order and by `age` in descending order.
// console.log(_.orderBy(users, ['user', 'age'], ['asc', 'desc']))
// // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
//
// users.sort((a,b) => {
//   if(a.user === b.user) {
//     return a.age > b.age
//   } else {
//     return a.user < b.user
//   }
// });


// I prefer isNumber then using typeof
// _.isNumber(3);
// // => true
// console.log(typeof 3 === 'number');
//
// _.isNumber(Number.MIN_VALUE);
// // => true
// console.log(typeof Number.MIN_VALUE === 'number');
//
// _.isNumber(Infinity);
// // => true
// console.log(typeof Infinity === 'number');
//
// _.isNumber('3');
// // => false
// console.log(typeof '3' === 'number');


// both are ok
// _.isUndefined(void 0);
// // => true
// console.log(typeof void 0 === 'undefined');
//
// _.isUndefined(null);
// // => false
// console.log(typeof null === 'undefined');


// Not needed Array.prototype.findIndex do the same job
// var users = [
//   { 'user': 'barney',  'active': false },
//   { 'user': 'fred',    'active': false },
//   { 'user': 'pebbles', 'active': true }
// ];
//
// _.findIndex(users, function(o) { return o.user === 'barney' });
// // => 0
//
// console.log(users.findIndex(el => el.user === 'barney'));
//
// // The `_.matches` iteratee shorthand.
// _.findIndex(users, { 'user': 'fred', 'active': false });
// console.log(users.findIndex(el => el.user === 'fred' && el.active === false));
// // => 1
//
// // The `_.matchesProperty` iteratee shorthand.
// _.findIndex(users, ['active', false]);
// // => 0
//
// // The `_.property` iteratee shorthand.
// _.findIndex(users, 'active');
// // => 2


// wydaje się być ok
// function duplicate(n) {
//   return [n, n];
// }
//
// _.flatMap([1, 2], duplicate);
// // => [1, 1, 2, 2]
//



// change give extra noise to this code. Not needed
//
// var users = [
//   { 'user': 'barney',  'age': 36 },
//   { 'user': 'fred',    'age': 40 },
//   { 'user': 'pebbles', 'age': 1 }
// ];
//
// var youngest = _
//   .chain(users)
//   .sortBy('age')
//   .map(function(o) {
//     return o.user + ' is ' + o.age;
//   })
//   .head()
//   .value();
// // => 'pebbles is 1'
//
// console.log(users
//   .sort((a, b) => a.age > b.age)
//   .map((el => el.user + ' is ' + el.age))
//   [0]);


// Hard to do this by your one. I consider it as good function
//
// _.groupBy([6.1, 4.2, 6.3], Math.floor);
// // => { '4': [4.2], '6': [6.1, 6.3] }
//
// // The `_.property` iteratee shorthand.
// _.groupBy(['one', 'two', 'three'], 'length');
// // => { '3': ['one', 'two'], '5': ['three'] }


//
// This is blessing if you have deeply nested arrays
//
// _.flattenDeep([1, [2, [3, [4]], 5]]);
// // => [1, 2, 3, 4, 5]


// can be useful for checking if we don't want to consider undefined as NaN)
// this is not explicit so when use it need extra comment. I will not use it in any case
//
// _.isNaN(NaN);
// // => true
// console.log(isNaN(NaN));
//
// _.isNaN(new Number(NaN));
// // => true
// isNaN(new Number(NaN))
//
// isNaN(undefined);
// // => true
//
// _.isNaN(undefined);
// // => false



// I can't imagine good use case for this in React app
// //// Use the "evaluate" delimiter to execute JavaScript and generate HTML.
// var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
// compiled({ 'users': ['fred', 'barney'] });
// // => '<li>fred</li><li>barney</li>'


// it have a good use case the same as debounce
// _.throttle(func, [wait=0], [options={}])


// const object = {
//   'a': [{ 'b': 2 }, { 'd': 4 }]
// };
//
// const other = {
//   'a': [{ 'c': 3 }, { 'e': 5 }]
// };
//
// _.merge(object, other);
// // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
//
// console.log({...object, ...other});
//
// // its better solution from stage X <- widely use in React


// it creates object if path does't exist. Much better than checking if something is undefined + extra logic for creation
// _.set(object, path, value)