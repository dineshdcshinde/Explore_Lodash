import _ from "lodash";
const UniqueByMethod = () => {
  const arr: object[] = [
    { id: "1", name: "Dinesh", skills: "mern" },
    { id: "3", name: "Rohan", skills: "mean" },
    { id: "1", name: "Dinesh", skills: "mern" },
  ];

  /*
  The _.uniqBy(arrName, "key") method is used to create a array which will not contain the properties which are duplicates.
*/
  const uniqueBySkills: object[] = _.uniqBy(arr, "skills");

  console.log("UniqueByMethod", uniqueBySkills);

  return <div>UniqueByMethod</div>;
};

export default UniqueByMethod;
