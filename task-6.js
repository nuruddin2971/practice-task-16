const extractUserInfo = (userObj) => {
  if (!userObj.user.name) {
    return "Invalid";
  }
  const {
    user: { name, age },
    hobbies: [firstHobby = "nothing yet"],
  } = userObj;
  return `${name} (${age}) likes ${firstHobby}`;
};

const userObj = {
  user: { name: "Sadia", age: 22 },
  hobbies: ["reading", "coding"],
};
const userObj2 = { user: { name: "Rafi", age: 19 }, hobbies: [] };
const userObj3 = { user: { age: 30 }, hobbies: [] };

console.log(extractUserInfo(userObj));
console.log(extractUserInfo(userObj2));
console.log(extractUserInfo(userObj3));
