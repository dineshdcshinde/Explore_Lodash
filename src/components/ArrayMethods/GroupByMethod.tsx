import _ from "lodash";
const GroupByMethod = () => {
  type User = {
    name: string;
    role: string;
    age: number;
  };

  const users: User[] = [
    { name: "john", role: "admin", age: 22 },
    { name: "ju", role: "user", age: 25 },
    { name: "kk", role: "superAdmin", age: 20 },
    { name: "arc", role: "superAdmin", age: 20 },
    { name: "rohan", role: "superAdmin", age: 20 },
  ];

  const roleAssignedUsers: Record<string, User[]> = _.groupBy(users, "role");
  console.log(roleAssignedUsers);

  console.log(roleAssignedUsers);

  return <div>GroupByMethod</div>;
};

export default GroupByMethod;
