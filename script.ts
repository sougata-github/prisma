/**Comment out any one of the functions to analyse how they work*/

import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

// export const create = async () => {
//   try {
//     await prisma.user.deleteMany();
//     await prisma.userPreference.deleteMany();
//     const user = await prisma.user.create({
//       data: {
//         name: "Sougata",
//         email: "sougata@test.com",
//         age: 22,
//         userPreference: {
//           create: {
//             emailUpdates: false,
//           },
//         },
//       },
//       include: {
//         userPreference: true,
//       },
//     });

//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };
// create();

// export const find = async () => {
//   try {
//     // const user = await prisma.user.findUnique({
//     //   where: {
//     //     email: "sougata@test.com",
//     //     name_age: {
//     //       age: 22,
//     //       name: "Sougata",
//     //     },
//     //   },
//     // });

//     // console.log(user);
//     // const user = await prisma.user.findFirst({
//     //   where: {
//     //     name: "Sougata",
//     //   },
//     // });
//     // console.log(user);

//     const users = await prisma.user.findMany({
//       where: {
//         // name: "Sougata",
//         // name: { not: "Sougata" },
//         // name: { in: ["Kyle", "Sougata"] },
//         // name: { notIn: ["Kyle", "Sougata"] },
//         // age: { lt: 20 },
//         // age: { gt: 20 },
//         // age: { lte: 20 },
//         // age: { gte: 20 },
//         // email: { contains: "@test.com" },
//         // email: { startsWith: "sougata" },
//         // email: { endsWith: ".com" },
//         // AND: [
//         //   { email: { startsWith: "sougata" } },
//         //   { email: { endsWith: ".com" } },
//         // ],
//         // OR: [{ name: "Sougata" }, { age: { lt: 20 } }],
//         // NOT: [{ name: "Kyle" }],
//         // userPreference: {
//         //   emailUpdates: true,
//         // },
//         // writtenPost: {
//         //   every: {
//         //     title: "Sougata",
//         //   },
//         // },
//         // writtenPost: {
//         //   some: {
//         //     title: "Sougata",
//         //   },
//         // },
//         // writtenPost: {
//         //   none: {
//         //     title: "Sougata",
//         //   },
//         // },
//       },
//       // distinct: ["name", "age"],
//       // take: 2,
//       // skip: 0,
//       // orderBy: {
//       //   age: "asc", //or desc
//       // },
//     });
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// find();

// export const update = async () => {
//   try {
//     // await prisma.user.update({
//     //   where: {
//     //     email: "sougata@test.com",
//     //   },
//     //   data: {
//     //     userPreference: {
//     //       update: {
//     //         emailUpdates: false,
//     //       }
//     //     },
//     //     email: "sougata@gmail.com",
//     //   },
//     // });
//     // await prisma.user.updateMany({
//     //   where: {
//     //     name: "Sougata",
//     //   },
//     //   data: {
//     //     role: Role.ADMIN,
//     //   },
//     // });
//   } catch (error) {
//     console.log(error);
//   }
// };
// update();

// export const clientDelete = async () => {
//   try {
//     // await prisma.user.delete({
//     //   where: {
//     //     email: "sougata@gmail.com",
//     //   },
//     // });

//     // await prisma.user.deleteMany({
//     //   where: {
//     //     age: { lt: 20 },
//     //   },
//     // });
//   } catch (error) {
//     console.log(error);
//   }
// };
// clientDelete();
