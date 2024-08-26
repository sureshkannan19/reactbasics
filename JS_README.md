**ForEach & Entries:**

```
const a = ["a", "b", "c"];

a.forEach(x=> console.log(x));

for (const [index, element] of a.entries()) {
  console.log(index, element);
}
```

**Sort:**

```
const a = ["z", "b", "c"];

a.sort();
a.forEach(x=> console.log(x)); // b,c,z

// Note: If compare function is not provided then all elements are converted to string and sorted, if arr = [80, 9] result = 80, 9

const nums = [80, 9];
nums.sort();
nums.forEach(x=> console.log(x)); // 80, 9

const numsWithCompareFun = [80, 9];
numsWithCompareFun.sort((x , y) => x > y ? 1 : x === y ? 0 : -1);
numsWithCompareFun.sort((x , y) => x - y);
numsWithCompareFun.forEach(x=> console.log(x)); // 9, 80

```

**Concat & Join :**

```
const a = ["a", "b", "c"];
const b = ["d", "e", "f"];

console.log(a.concat(b)); // a, b, c, d, e, f

console.log(a.join('-')); // a-b-c-d-e-f
```

**Reduce:**

```
const array1 = [1, 2, 3, 4];
const initialValue = 0;
console.log(array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
)); // 10

const empArr = [ { age: 25, name: 'SK' }, { age: 35, name: 'SK' } ];
console.log(empArr.reduce(
  (accumulator, current) => ({ overAllAge : accumulator.overAllAge  + current.age }),
  { overAllAge : 0}
));
```

**Find, FindIndex, IndexOf, Includes:**

```
console.log([1, 2, 3, 4, 5].find(x => x > 2)) // 3
console.log([1, 2].find(x => x > 2)) //  undefined

console.log([1, 2, 3, 4, 5].findIndex(x => x > 2)) // 2
console.log([1, 2].findIndex(x => x > 2)) // -1

console.log([1, 2].indexOf(1)) // 0
console.log([1, 2].indexOf(3)) // -1

console.log([1, 2, 3, 4, 5].includes(5)) // true
console.log([1, 2, 3, 4, 5].includes('5')) // false
```

**Every & some:**

```
console.log([1, 2, 3, 4, 5].every(x =>x > 0)) // true
console.log([1, 2, 3, 4, 5].every(x => x < 0)) // false

console.log([1, 2, 3, 4, 5].some(x =>x > 0)) // true
console.log([1, 2, 3, 4, 5].some(x => x < 0)) // false
```

**Modify array:**

```
const arr = [1, 2];
arr.push(3)
console.log(arr) // [1, 2, 3]
arr.pop()
console.log(arr) // [1, 2]

const newArr = [2, 3];
newArr.unshift(1)
console.log(newArr) // [1, 2, 3]
newArr.shift()
console.log(newArr) // [2, 3]
```

**Splice (In place array update):**

```
const arr = [1, 2, 3];
console.log(arr.splice(1)) // [2, 3]

const arr = [1, 2, 3, 4];
console.log(arr.splice(1, 3))  // [2, 3, 4] // endInclusive
```

**Slice (returns new array):**

```
const arr = [1, 2, 3];
console.log(arr.slice(1)) // [2, 3]

const arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3))  // [2, 3] // endExclusive
```

**Filter & Map (produces new array):**

```
const arr = [1, 2, 3];
console.log(arr.filter(x  => x > 1)) // [2, 3]

const arr = [1, 2, 3];
console.log(arr.map(x  => x * 2)) // [2, 4, 6]
```

**Sequence Generator:**

```
function sumAll(arr) {
  const sequenceGenerator = arr[0] < arr[1] ? range(arr[0], arr[1])
                                            : range(arr[1], arr[0]);
  let sum = 0;
  for(let value of sequenceGenerator) {
    sum +=value;
  }
  return sum;
}
function* range(from, to) {
  while(from <= to) yield from++
}
```

**Currying Function:**

```
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

const addLambda = a => b => c => a + b + c;
console.log(add(1)(2)(3)) // 6
console.log(addLambda(1)(2)(3)) //6

Example 2:
function addTogether(...a) {
  if(!isNumber(a[0])) return undefined
  if(a.length > 1) return isNumber(a[1]) ? a[0] + a[1] : undefined;
  return (b) => isNumber(b) ? a[0] + b : undefined;
}

function isNumber(x) {
  return typeof x === 'number';
}

console.log(addTogether(5, 3));
console.log(addTogether(3)(5));
console.log(addTogether(2));
console.log(addTogether(2, undefined));
console.log(addTogether('abcde'));
console.log(addTogether(5)([7]));
```

**Object.keys() :**

```
function whatIsInAName(collection, source) {
  const srcKeys = Object.keys(source);
  return collection.filter(x => srcKeys.every(k => x[k]!== undefined && source[k] === x[k]));
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
```

**Private & public(binded to this keyword)Variable:**

```
const Person = function(first, last) {
  let firstName = first; // private
  let lastName  = last; // private

  this.getFirstName = () => firstName; // pubic
  this.getLastName = () => lastName; // pubic
}
```
