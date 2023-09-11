// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// src/mocks/handlers.js
// import jwt from "jwt-mock-server";
import { rest } from "msw";
import { USERS, PRODUCTS } from "./data";

// const storedData = sessionStorage.getItem("user");
// const dataStore = storedData ? JSON.parse(storedData) : [];
// const secretKey = "your-secret-key";

export const handlers = [
  rest.get("http://localhost:3000/user/:id", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const { id } = req.params;

    const user = USERS.find((user) => user.id == id);

    if (!user)
      return res(
        ctx.status(200),
        ctx.json({
          error: "no user",
        })
      );

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        user: user,
      })
    );
  }),

  rest.post("http://localhost:3000/login", async (req, res, ctx) => {
    const { username, password } = await req.json();
    console.log("logging in ");
    const user = USERS.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      return res(
        ctx.status(401),
        ctx.json({
          message: "Login failed. Invalid credentials.",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        user, // You can generate a token here
      })
    );
  }),

  rest.get("http://localhost:3000/products", async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        products: PRODUCTS,
      })
    );
  }),
];
