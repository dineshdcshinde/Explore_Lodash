import _ from "lodash";
const DefaultsMethod = () => {
  type theme = {
    fontSize: number;
    color: string;
    backgroundColor?: string;
  };

  const userSetting: theme = {
    fontSize: 12,
    color: "#ccc",
  };

  const defaultSetting: theme = {
    fontSize: 14,
    color: "#000",
    backgroundColor: "#fff",
  };

  const finalSetting: theme = _.defaults(userSetting, defaultSetting);

  console.log("Final Setting", finalSetting);

  return <div>DefaultsMethod</div>;
};

export default DefaultsMethod;
