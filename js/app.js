const APIURL = "https://api.github.com/users"; // api for geting user data

const getUser = async (username) => {
  const response = await fetch(APIURL + username);
//   console.log(response);
};

getUser("James Smith");
