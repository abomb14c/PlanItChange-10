export const addUserFetch = async (user) => {
  const url = "https://intense-scrubland-13005.herokuapp.com/api/v1/user_create";

  const options = {
    method: "POST",
    body: JSON.stringify({
 user
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }

  const response = await fetch(url, options);
  const newUser = await response.json();
  console.log(newUser)
}