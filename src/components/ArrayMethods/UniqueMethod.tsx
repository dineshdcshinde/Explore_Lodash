import _ from "lodash";
const UniqueMethod = () => {
  const array: (string | number)[] = [
    "js",
    "java",
    "python",
    "js",
    "java",
    "python",
    1,
    2,
    2,
    3,
    3,
    3,
    3,
    5,
    6,
  ];

  /*
  The unique method is used to get the unique Values from the array.
    It removes the duplicate values from the array and returns a new array with unique values.

    Syntax:
    _.uniq(array)

*/

  const uniqueArray = _.uniq(array);
  console.log("Unique Array: ", uniqueArray);
  return <div>UniqueMethod</div>;
};

export default UniqueMethod;
