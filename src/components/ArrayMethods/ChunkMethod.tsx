import _ from "lodash";
const ChunkMethod = () => {
  const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunkedArray: number[][] = _.chunk(array, 3);

  /*
    The "_.chunk" method is used to split an array into smaller arrays of a specified size.
    
    Syntax: 
    _.chunk(array, size)
*/
  console.log(chunkedArray);

  return <div>ChunkMethod</div>;
};

export default ChunkMethod;
