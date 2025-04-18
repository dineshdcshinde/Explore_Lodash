import _ from "lodash";
const Merge = () => {
  type theme = {
    color: string;
    fontSize: number;
    fontFamily?: string;
  };

  const defaultTheme: theme = {
    color: "black",
    fontSize: 16,
    fontFamily: "Arial",
  };

  const customizeTheme: theme = {
    color: "black",
    fontSize: 20,
  };

  /*
  Merge method is used for mergin two objects or more objects. I mean, the same properties will be override by the last object that we will write in the method.
  And, if there are the properties that one has and another hasn't then that property is also added. 
  
  Syntax: 
    _.merge({}, object1, object2])

    Now, the object1 and object2 properties will be calculated and those were overrided by the object2 properties. And, if object2 hasn't one property and the object1 has the property then 
    that property will be added to the new object

*/
  const finalTheme: theme = _.merge({}, defaultTheme, customizeTheme);

  console.log(finalTheme);

  return <div>Merge</div>;
};

export default Merge;
