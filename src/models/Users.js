export default class Users {
  constructor(users) {
    this.users = users;
  }

  getFullNameById(id) {
    for (const user of this.users) {
      if (user.id === id) {
        return { ...user.name };
      }
    }
  }
}
