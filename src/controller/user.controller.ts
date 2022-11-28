import { User } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

import { Request, Response } from 'express';
import { prisma } from "../config/db";

// export const getAllUsers = async (req: Request, res: Response) => {
//     const getusers = await prisma.user.findMany
//    return res.status(200).json(getusers);
//   };
// export const getAllUsers = async (req: Request, res: Response) => {
//   try {
//     const getUsers = await prisma.user.findMany();
//     return res.status(200).json(getUsers);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       mrssage: "server Error !",
//     });
//   }
// };


  // export const addUser = async (req: Request, res: Response) => {
    
  //   const newUser = req.body as User;
  
  //   try {
  //      await prisma.user.create({
  //        data: newUser,
  //     });
  //     res.status(201).json({
  //       message: 'New blog created !',
  //     });
  //   } catch (error) {
  //     const prismaError = error as PrismaClientKnownRequestError;
  //     res.status(400).json({
  //       message: prismaError.message,
  //     });
  //   }
  // };

  // export const getAllUsers = async (req: Request, res: Response) => {
  //   try {
  //     const getUsers = await prisma.user.findMany();
  //     return res.status(200).json(getUsers);
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(500).json({
  //       mrssage: "server Error !",
  //     });
  //   }
  // };
  
  // export const addUser = async (req: Request, res: Response) => {
  //   try {
  //     const newUser = req.body as User;
  
  //     await prisma.user.create({
  //       data: newUser,
  //     });
  //     return res.status(200).json({
  //       message: "user added !",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(500).json({
  //       mrssage: "server Error !",
  //     });
  //   }
  // };

  export const getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
};

  export const addUser = async (req: Request, res: Response) => {
    try{
        const newUser = req.body as User;
        await prisma.user.create({
            data: newUser,
        });
        return res.status(201).json({
            message: "New User Created "
        });
    }catch (error) {
        const prismaError = error as PrismaClientKnownRequestError;
        res.status(400).json({
          message: prismaError.message,
        });
      }
}

