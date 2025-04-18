import _ from "lodash";

const PickMethod = () => {
  type person = {
    name: string;
    age: string;
    pass: string;
    username: string;
  };

  const personInfo: person = {
    name: "dinesh",
    age: "23",
    pass: "1234",
    username: "dinesh123",
  };

  /* 
    Pick method is used to create a new object by picking specific properties from an existing object
    If the property exists then it will be added to the new object other wise it empty object will came



    syntax- 
    _.pick(objectName, ["values", "another Values"])


  */

  const pickInfo: object = _.pick(personInfo, ["age", "name"]);

  console.log("Picked Info", pickInfo);

  return <div>PickMethod</div>;
};

export default PickMethod;
