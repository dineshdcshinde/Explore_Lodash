import _ from "lodash";
const OmitMethod = () => {
  interface Person {
    name: string;
    age: number;
    address: string;
    password: string;
  }
  const user: Person = {
    name: "John",
    age: 30,
    address: "123 Main St",
    password: "secret",
  };

  /*
    Omit is the method that creates a new object by omitting the specified properties from the original object. 
    In short, the properties, those are mentioned in the array, will be removed from the object

    Syntax - 
    _.omit(object, ["properties", "another prop"])
*/

  const newOne: object = _.omit(user, ["password", "address"]);

  console.log(newOne);

  return <div>OmitMethod</div>;
};

export default OmitMethod;
