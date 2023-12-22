const date = new Date();
// Date CheckIn
let checkIn = `${date.getFullYear()}-${
  (date.getMonth() + 1)
}-${date.getDate()}`;
// Date CheckOut
let checkOut = `${date.getFullYear()}-${(date.getMonth() + 1)}-${
  date.getDate() + 1
}`;

export { checkIn, checkOut };
