import _ from "lodash";
const ValuesMethod = () => {
  const person: object = { name: "dinesh", age: 22 };

  const values: unknown = _.values(person);

  console.log("Values provided", values);

  return <div>ValuesMethod</div>;
};

export default ValuesMethod;
