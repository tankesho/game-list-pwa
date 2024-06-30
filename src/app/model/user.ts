export class User {
  id: number;
  username: string;
  email?: string;
  password: string;
  isAdmin: boolean;
  constructor(id: number, username: string, password: string, isAdmin: boolean = false) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
  }

  public static clone(user: User) {
    let u: User = new User(user.id, user.username, user.password, user.isAdmin);
    return u;
  }

  public static toWS(user: User) {
    let u: User = new User(user.id, user.username, user.password, user.isAdmin);
    return u;
  }
}
