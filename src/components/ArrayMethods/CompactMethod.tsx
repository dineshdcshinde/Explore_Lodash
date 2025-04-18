import _ from "lodash";
const CompactMethod = () => {
  const arr: (number | string | boolean | undefined | null)[] = [
    0,
    1,
    "",
    null,
    NaN,
    undefined,
    false,
    true,
    "js",
    0,
    5,
  ];

  /* 
    The "_.compact" method in lodash is used to remove all the falsy values from an array.
    */

  const compactArr: (number | string | boolean)[] = _.compact(arr);

  console.log(compactArr);

  return <div>CompactMethod</div>;
};

export default CompactMethod;
