import { Request, Response } from 'express';
import * as userService from '../services/UserService';

export const getAllUsers = (req: Request, res: Response) => {
  const users = userService.getAllUsers();
  res.json(users);
};

export const getUserById = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const user = userService.getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};