import _ from "lodash";
const InvertMethod = () => {
  const obj1: object = {
    name: "Dinesh",
    age: 22,
  };

  const invertedObject: object = _.invert(obj1);
  console.log("inverted object", invertedObject);

  return <div>InvertMethod</div>;
};

export default InvertMethod;
