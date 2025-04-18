import _ from "lodash";
const SetMethod = () => {
  interface person {
    name: string;
    age: number;
    address: {
      city: string;
      state?: string;
    };
  }

  const personInfo: person = {
    name: "chandani",
    age: 22,
    address: {
      city: "Nagpur",
    },
  };

  /* 

  shortpath - means there is no need to write the full path exclude the object name

  _.set(objectName, path(short path), value)
    The set method is used to set the value at the specified place where you want that 
    just tell the -
                    name of the object
                    path where you want to set the value
                    value that you want to set
*/

  // const deepClonePersonInfo = _.cloneDeep(personInfo);

  _.set(personInfo, "address.state", "Maharashtra");

  console.log("Set Method:", personInfo);

  return <div>SetMethod</div>;
};

export default SetMethod;
