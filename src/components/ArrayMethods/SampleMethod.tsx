import _ from "lodash";
const SampleMethod = () => {
  const fruits: string[] = ["apple", "banana", "orange", "mango"];

  // The "_.sample" method is use to get only one random element from an array.
  // While the _.sampleSize method is used to get the random elements that you want from an array.

  const randomOneFruit: string | undefined = _.sample(fruits);
  const randomFruits: string[] = _.sampleSize(fruits, 2);

  console.log("random fruits,", randomFruits);
  console.log("random one fruit,", randomOneFruit);

  return <div>SampleMethod</div>;
};

export default SampleMethod;
