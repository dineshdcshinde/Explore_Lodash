import _ from "lodash";
const ObjectKeys = () => {
  type personInfo = {
    name: string;
    age: string;
    address: {
      city: string;
    };
  };

  const person: personInfo = {
    name: "John",
    age: "30",
    address: {
      city: "New York",
    },
  };

  /*
    The _.keys(objectName) is the method that will give you the array with the keys that are present in the object
  */
  const keys = _.keys(person);
  console.log("keys", keys);

  return <div>ObjectKeys</div>;
};

export default ObjectKeys;
