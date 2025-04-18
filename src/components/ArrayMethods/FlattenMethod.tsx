import _ from "lodash";
const FlattenMethod = () => {
  const arr: (number | number[])[] = [1, 2, 3, 4, [5, 6, 7], [8, 9, 55]];

  // The flatten method is used to flatten an array of nested arrays into a single array. But, only for the 1 level deep

  const flattenArr: number[] = _.flatten(arr);

  console.log(flattenArr);

  return <div>FlattenMethod</div>;
};

export default FlattenMethod;
