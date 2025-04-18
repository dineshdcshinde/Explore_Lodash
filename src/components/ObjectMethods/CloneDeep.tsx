import _ from "lodash";
const CloneDeep = () => {
  // Define a person object
  interface person {
    name: string;
    age: number;
    address: {
      city: string;
      state: string;
      country: string;
    };
  }

  const original: person = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      state: "NY",
      country: "USA",
    },
  };

console.log("orginal before", original)

  // Uses the deepClone
  const deepClone:person = _.cloneDeep(original);

  original.name= "Dinesh";

  console.log("Original after:", original);
  console.log("Deep Cloned Object:", deepClone);

  return <div>CloneDeep</div>;
};

export default CloneDeep;
