import _ from "lodash"
const Get = () => {
    interface personInfo{
        name: string;
        age: number;
        address:{
            city: string;
        }
    }

    const person1:personInfo = {
        name: "John",
        age: 30,
        address: {
            city: "New York",
        },
    }
    const addressInfo:string = _.get(person1, person1.address.street, "Not found" )
    console.log(addressInfo)

    // _.get(objectName, what propert(path), alternet text) method





  return <div>Get</div>;
};

export default Get;
