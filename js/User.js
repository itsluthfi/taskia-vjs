// model

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    return {
      success: true,
    };
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
