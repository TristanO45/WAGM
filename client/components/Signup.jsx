import React from "react";



export const Signup = () => {
  return (
    <form action="/action_page.php" method="get">
      <label for="uname">Username</label>
      <input type="text" id="uname" name="uname" />
      <label for="pword">Password</label>
      <input type="text" id="lname" name="lname" />
      <button type="submit">Submit</button>
      <button type="submit" formaction="/action_page2.php">
        Submit to another page
      </button>
    </form>
  );
};
