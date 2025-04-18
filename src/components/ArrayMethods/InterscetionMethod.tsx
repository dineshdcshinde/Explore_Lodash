import _ from "lodash";
const InterscetionMethod = () => {
  const userRoles: string[] = ["admin", "user", "editor"];
  const allowedRoles: string[] = ["viewer", "user", "developer"];
  const anotherRoles: string[] = ["viewer", "user", "developer"];

  // The intersection method is used to find the common elements that are present in each of the array

  const interSectionRoles: string[] = _.intersection(
    userRoles,
    allowedRoles,
    anotherRoles
  );

  console.log("interSectionRoles", interSectionRoles);

  //   _.intersectionBy() for objects - it will give you the first that will came in the array
  const obj1: object[] = [{ id: 1, name: "John" }];
  const obj2: object[] = [{ id: 2, name: "John" }];

  const same: object[] = _.intersectionBy(obj1, obj2, "name");
  console.log("same", same);

  return <div>InterscetionMethod</div>;
};

export default InterscetionMethod;
