import _ from "lodash";
const TakeMethod = () => {
  const arr: number[] = [1, 2, 3, 5, 5, 6, 6];
  const topFive: number[] = _.take(arr, 5);

//   It gaves the elements from the starting according to our need that we pass to the size
  console.log(topFive);

  return <div>TakeMethod</div>;
};

export default TakeMethod;
