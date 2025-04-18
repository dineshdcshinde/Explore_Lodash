import _ from "lodash";
const IsEmpty = () => {
  const emptyObj: object = {};
  const NonEmptyObj: object = {
    name: "dc",
  };

  /*
    It will throw boolean value that is the object is empty or not.
  */

  const isEmpty: boolean = _.isEmpty(NonEmptyObj);

  console.log("Is object empty", isEmpty);

  return <div>IsEmpty</div>;
};

export default IsEmpty;
