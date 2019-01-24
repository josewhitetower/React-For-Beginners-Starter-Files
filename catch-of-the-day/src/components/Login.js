import React from "react";
import PropType from "prop-types";

const Login = ({ authenticate }) => {
  return (
    <div>
      <nav className="login">
        <h2>Inventory d</h2>
        <p>Sing in to manage your store's inventory</p>
        <button className="facebook" onClick={() => authenticate("Facebook")}>
          Login with Facebook
        </button>
        <button className="twitter" onClick={() => authenticate("Twitter")}>
          Login with Twitter
        </button>
      </nav>
    </div>
  );
};

Login.propTypes = {
  authenticate: PropType.func.isRequired
};

export default Login;
