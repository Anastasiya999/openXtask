export default class Users {
  constructor(users) {
    this.users = users;
  }

  getItems() {
    return this.users;
  }

  getFullNameById(id) {
    for (const user of this.users) {
      if (user.id === id) {
        return { ...user.name };
      }
    }
  }
}
