import _ from "lodash";

const HasMethod = () => {
  type personInfo = {
    name: string;
    age: number;
    address: {
      city: string;
      state?: string;
    };
  };

  const person: personInfo = {
    name: "chandani",
    age: 21,
    address: {
      city: "Nagpur",
    },
  };

  const hasState: boolean = _.has(person, "address.state");

  console.log("HasMethod", hasState);

  return <div>HasMethod</div>;
};

export default HasMethod;
