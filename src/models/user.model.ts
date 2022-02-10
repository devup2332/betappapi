export interface IUser {
  id?: string;
  username: string;
  password: string;
  role: "user" | "admin";
  created_at?: Date;
  phone: string;
  email: string;
}

class User {
  username: string;
  created_at: Date;
  phone: string;
  email: string;

  constructor(user: IUser) {
    this.username = user.username;
    this.created_at = user.created_at;
    this.phone = user.phone;
    this.email = user.email;
  }
}

export default User;
