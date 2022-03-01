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
  id: string;
  role: "superadmin" | "user" | "admin";

  constructor(user: IUser) {
    this.username = user.username;
    this.created_at = user.created_at;
    this.phone = user.phone;
    this.email = user.email;
    this.role = user.role;
    this.id = user.id;
  }
}

export default User;
