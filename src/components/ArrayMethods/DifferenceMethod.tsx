import _ from "lodash";
const DifferenceMethod = () => {
  const fruits: string[] = ["apple", "banana", "orange", "mango"];
  const notWanted: string[] = ["banana"];
  const wantedFruits: string[] = _.difference(fruits, notWanted);
  console.log("fruits that I wants,", wantedFruits);

  return <div>DifferenceMethod</div>;
};

export default DifferenceMethod;
