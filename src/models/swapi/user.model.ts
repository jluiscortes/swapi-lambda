class User {
  constructor(public id: number, public name: string, public email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  all() {
    return [new User(this.id, this.name, this.email)];
  }
}

export default User;
