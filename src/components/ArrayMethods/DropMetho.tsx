import _ from "lodash";
const DropMetho = () => {
  const arr: number[] = [1, 2, 3, 5, 66];

  //   The drop method is used to remove the elements from the starting and gave all the rest elements
  const dropFromTwo: number[] = _.drop(arr, 2);

  console.log("dropFromTwo", dropFromTwo);

  return <div>DropMetho</div>;
};

export default DropMetho;
