//for users grid
const users_columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "User name", width: 100 },
  { field: "email", headerName: "email", width: 160 },
  {
    field: "address",
    headerName: "City",
    width: 100,
    valueGetter: (params) => `${params.row.address.city || ""}`,
  },
  {
    field: "name",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.name.firstname || ""} ${params.row.name.lastname || ""}`,
  },
];

const users_fields = ["id", "username", "address", "name", "email"];

//for products grid
const products_columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 600 },
  { field: "price", headerName: "Price", width: 160 },
  {
    field: "category",
    headerName: "Category",
    width: 130,
  },
];

const products_fields = ["id", "title", "price", "category"];

//for carts grid
const carts_columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "userId", headerName: "user ID", width: 100 },
  { field: "date", headerName: "Date", type: "dateTime", width: 260 },
];

const carts_fields = ["id", "userId", "date"];

//for categories grid

const category_columns = [
  { field: "id", headerName: "#", width: 70 },
  { field: "category", headerName: "Category", width: 200 },
  { field: "quantity", headerName: "Quantity", width: 100 },
];

export {
  users_columns,
  users_fields,
  products_columns,
  products_fields,
  carts_columns,
  carts_fields,
  category_columns,
};
