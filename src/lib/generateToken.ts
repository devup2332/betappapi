import {IUser} from "../models/user.model";
import jwt from 'jsonwebtoken'
import {environments} from "../environemts";

export const generateToken =(user:IUser) => {
   return jwt.sign({id:user.id,email:user.email}, environments.JWT.SECRET) 
}
