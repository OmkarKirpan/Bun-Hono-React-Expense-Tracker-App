import { Hono } from "hono";

type Expense = {
  id: number;
  title: string;
  amount: number;
};

const fakeExpenses: Expense[] = [
  { id: 1, title: "Groceries", amount: 150.75 },
  { id: 2, title: "Electricity Bill", amount: 85.6 },
  { id: 3, title: "Internet Bill", amount: 45.99 },
  { id: 4, title: "Rent", amount: 1200.0 },
  { id: 5, title: "Car Maintenance", amount: 300.4 },
  { id: 6, title: "Dining Out", amount: 65.3 },
  { id: 7, title: "Gym Membership", amount: 55.0 },
  { id: 8, title: "Streaming Services", amount: 15.99 },
  { id: 9, title: "Phone Bill", amount: 40.5 },
  { id: 10, title: "Clothing", amount: 120.0 },
];

export const expensesRoute = new Hono()
  .get("/", (c) => {
    return c.json({ expenses: fakeExpenses });
  })
  .post("/", async (c) => {
    const expense = await c.req.json();
    console.log({ expense });
    return c.json(expense);
  });
// .delete
// .put
