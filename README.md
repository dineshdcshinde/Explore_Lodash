# 📚 Lodash Cheatsheet – Most Used Methods (Table Format)

Simplest guide for commonly used `lodash` methods with examples and plain English explanation.

---

## 🔸 Object Methods

| Method          | Code Example                          | Explanation                            |
| --------------- | ------------------------------------- | -------------------------------------- |
| `_.get()`       | `_.get(obj, 'user.name', 'Guest')`    | Get a deep value safely with a default |
| `_.set()`       | `_.set(obj, 'user.name', 'John')`     | Set a deep value safely                |
| `_.has()`       | `_.has(obj, 'user.email')`            | Check if a path exists                 |
| `_.pick()`      | `_.pick(obj, ['id', 'name'])`         | Keep only selected keys                |
| `_.omit()`      | `_.omit(obj, ['password'])`           | Remove selected keys                   |
| `_.keys()`      | `_.keys(obj)`                         | Get all object keys                    |
| `_.values()`    | `_.values(obj)`                       | Get all object values                  |
| `_.toPairs()`   | `_.toPairs(obj)`                      | Convert to `[key, value]` pairs        |
| `_.merge()`     | `_.merge(obj, updates)`               | Deep merge objects                     |
| `_.clone()`     | `_.clone(obj)`                        | Create shallow copy                    |
| `_.cloneDeep()` | `_.cloneDeep(obj)`                    | Create deep copy                       |
| `_.isEqual()`   | `_.isEqual(a, b)`                     | Deep compare two objects               |
| `_.mapValues()` | `_.mapValues(obj, val => val * 2)`    | Update each value in object            |
| `_.invert()`    | `_.invert({ a: 'x' })`                | Flip keys and values                   |
| `_.defaults()`  | `_.defaults(obj, { isAdmin: false })` | Fill missing keys with default values  |

---

## 🔹 Array Methods

| Method             | Code Example                         | Explanation                       |
| ------------------ | ------------------------------------ | --------------------------------- |
| `_.chunk()`        | `_.chunk([1,2,3,4], 2)`              | Break into smaller arrays         |
| `_.compact()`      | `_.compact([0, false, 2, '', null])` | Remove falsey values              |
| `_.concat()`       | `_.concat([1], 2, [3])`              | Combine values and arrays         |
| `_.difference()`   | `_.difference([1,2,3], [2])`         | Items not present in second array |
| `_.drop()`         | `_.drop([1,2,3], 1)`                 | Remove first `n` items            |
| `_.dropRight()`    | `_.dropRight([1,2,3], 1)`            | Remove last `n` items             |
| `_.flatten()`      | `_.flatten([1, [2], [3]])`           | Flatten one level deep            |
| `_.flattenDeep()`  | `_.flattenDeep([1, [2, [3]]])`       | Fully flatten nested arrays       |
| `_.intersection()` | `_.intersection([1,2], [2,3])`       | Get common items                  |
| `_.uniq()`         | `_.uniq([1,2,2,3])`                  | Remove duplicates                 |
| `_.zip()`          | `_.zip(['a', 'b'], [1, 2])`          | Combine arrays by index           |
| `_.unzip()`        | `_.unzip([['a', 1], ['b', 2]])`      | Reverse `zip`                     |
| `_.without()`      | `_.without([1, 2, 3], 2)`            | Remove specific items             |
| `_.reverse()`      | `_.reverse([1, 2, 3])`               | Reverse the array                 |
| `_.take()`         | `_.take([1, 2, 3], 2)`               | Take first `n` items              |
| `_.takeRight()`    | `_.takeRight([1, 2, 3], 2)`          | Take last `n` items               |

---

## ✅ Pro Tip

Use ES version with tree-shaking in TypeScript:

