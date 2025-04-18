import _ from "lodash";
const IsEqual = () => {
  const obj1: object = {
    name: "Dinesh",
    age: 22,
  };

  const obj2: object = {
    name: "Dinesh",
    age: 22,
  };

  /*
    isEqual method will return the boolean value if the two objects are equal or not. 
  */
  const areEqual: boolean = _.isEqual(obj1, obj2);

  console.log("objects are equal", areEqual);

  return <div>IsEqual</div>;
};

export default IsEqual;
