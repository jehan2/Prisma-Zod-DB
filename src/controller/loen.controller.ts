// import { Request, Response } from 'express';

// export const getAll = async (req: Request, res: Response) => {
    //:TODO Complete this endpoint
   // const users = await prisma.user.findMany();
   // res.status(200).json(users);
  // };

  // export const add = async (req: Request, res: Response) => {
   
  //  const new = req.body as ;
  
    // try {
    //  await prisma.blog.create({
     //   data: newBlog,
    //  });
      // res.status(201).json({
        // message: 'New blog created !',
      // });
    // } catch (error) {
   //   const prismaError = error as PrismaClientKnownRequestError;
      // res.status(400).json({
    //    message: prismaError.message,
      // });
    // }
  // };

import { Loan } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/db";
import { pSchemaType } from "../zod_schema/schema";

// get all laons
export const getAllLoan = async (req: Request, res: Response) => {
  try {
    const allLoans = await prisma.loan.findMany();
    return res.status(200).json(allLoans);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};


export const addLoan = async (req: Request, res: Response) => {
  try {
    const newLoan = req.body as Loan;
    await prisma.loan.create({ data: newLoan });

    return res.status(201).json({
      message: "laon added",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};

////
export const lendBook = async (req: Request, res: Response) => {
  try {
    const {userid} = req.params as pSchemaType;

    const getUserBooks = await prisma.user.findUnique({
     
      where: {id:userid},
      select: {
        username: true,
        loen: true,
      },
    });

    return res.status(200).json(getUserBooks);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};