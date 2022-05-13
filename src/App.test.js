import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import mockusers from "./data/mockusers";
import App from "./App";
import Users from "./models/Users";

test("renders task1", async () => {
  await render(<App />);
  const header = screen.getByText(/Task 1/i);
  expect(header).toBeInTheDocument();
  await screen.getAllByRole("progressbar");

  //await screen.findByText(/Users/i);
  await waitFor(() => {
    expect(screen.getByText("Users")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("Products")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("Carts")).toBeInTheDocument();
  });

  const button = await screen.findAllByRole("button");
  fireEvent.click(button[0]);

  await waitFor(() => {
    expect(screen.getByText("User name")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("johnd")).toBeInTheDocument();
  });

  fireEvent.click(button[1]);
  await waitFor(() => {
    expect(screen.getByText("Category")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("jewelery")).toBeInTheDocument();
  });

  fireEvent.click(button[2]);
  await waitFor(() => {
    expect(screen.getByText("user ID")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("Date")).toBeInTheDocument();
  });
});

test("renders task2", async () => {
  await render(<App />);
  const header = screen.getByText(/Task 2/i);
  expect(header).toBeInTheDocument();

  const button = await screen.findAllByRole("button");
  fireEvent.click(button[3]);

  await waitFor(() => {
    expect(screen.getByText("Quantity")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("Category")).toBeInTheDocument();
  });
});

test("renders task3", () => {
  render(<App />);
  const header = screen.getByText(/Task 3/i);
  expect(header).toBeInTheDocument();
  expect(screen.getByText("Full name:")).toBeInTheDocument();
  expect(screen.getByText("Value:")).toBeInTheDocument();
});

test("renders task4", () => {
  render(<App />);
  const header = screen.getByText(/Task 4/i);
  expect(header).toBeInTheDocument();
  expect(screen.getByText("First user:")).toBeInTheDocument();
  expect(screen.getByText("Second user:")).toBeInTheDocument();
  expect(screen.getByText("Distance:")).toBeInTheDocument();
});

test("tests max distance calculation", () => {
  render(<App />);
  const users = new Users(mockusers);
  const furthest = users.findFurthersUsers();

  expect(furthest.user1.name.firstname).toBe("simon");
  expect(furthest.user2.name.firstname).toBe("kate");
});
