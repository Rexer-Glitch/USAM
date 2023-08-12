class AuthenticationServices {
  static async SignIn(email, password) {
    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        return {
          accessToken: data.accessToken,
          user: data.user,
          message: null,
        };
      } else {
        return { message: data.message };
      }
    } catch (error) {
      return { message: "Error, try again later." };
    }
  }

  static async SignUp(username, email, password) {
    try {
      const response = await fetch("/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        return {
          accessToken: data.accessToken,
          user: data.user,
          message: null,
        };
      } else {
        return { message: data.message };
      }
    } catch (error) {
      console.log(error);
      return { message: "Error, try again later." };
    }
  }

  static async SignOut(token) {
    try {
      const response = await fetch("/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });

      if (response.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  static async IsUsernameAvailable(username) {
    if (typeof username !== "string" || username.trim() === "") return false;
    try {
      const response = await fetch("/auth/username_exists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      const result = await response.json();
      if (response.ok) {
        return result.result;
      }
      return false;
    } catch (err) {
      return false;
    }
  }
}

export default AuthenticationServices;
