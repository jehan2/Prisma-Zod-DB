import { Book } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";
import { prisma } from "../config/db";

// export const getAllBook = async (req: Request, res: Response) => {
//   try {
//     const getBooks = await prisma.book.findMany();
//     return res.status(200).json(getBooks);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       mrssage: "server Error !",
//     });
//   }
// };

// export const addBook = async (req: Request, res: Response) => {
//   try {
//     const newBook = req.body as Book;
//     await prisma.book.create({ data: newBook });

//     return res.status(201).json({
//       message: "book added !",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       mrssage: "server Error !",
//     });
//   }
// };
export const getAllBooks = async (req: Request, res: Response) => {
  const book= await prisma.book.findMany();
  return res.status(200).json(book);
  }

export const addBook = async (req: Request, res: Response) => {
  try{
      const newBook = req.body as Book;
      await prisma.book.create({
          data: newBook,
          });
      return res.status(201).json({
          message: "New Book Created "
      });
  }catch (error) {
      const prismaError = error as PrismaClientKnownRequestError;
      res.status(400).json({
        message: prismaError.message,
      });
    }
}

