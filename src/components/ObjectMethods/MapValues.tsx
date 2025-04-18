import _ from "lodash";

const MapValues = () => {
  type scores = {
    math: number;
    english: number;
    science: number;
  };

  const markSheet: scores = {
    math: 90,
    english: 80,
    science: 85,
  };

  /*  
  The mapValues method will loop through the object and apply the changes that we ask and return that in the new object
  
  _.mapValues(objectName, (val)=> condition)

*/

  const newMarkSheet: scores = _.mapValues(markSheet, (sub) => sub + 5);

  console.log("New Marksheet", newMarkSheet);
  console.log("Old Marksheet", markSheet);

  return <div>MapValues</div>;
};

export default MapValues;
