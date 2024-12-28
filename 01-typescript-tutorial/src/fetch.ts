import { z } from "zod";

const url = "https://www.course-api.com/react-tours-project";
///////////////////////////////
// 69. Fetch Data - Basic

// async function fetchData(url: string) {
//   try {
//     const response = await fetch(url);
//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();

//     console.log(data);

//     return data;
//   } catch (error) {
//     const errMsg =
//       error instanceof Error ? error.message : "There was a error...";
//     console.error(errMsg);
//     // Throw error
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour: any) => console.log(tour.name));

// return empty array
// throw error in catch block
// we are not setting state values in this function

///////////////////////////////
// 70. Fetch Data - Setup Type & 71. Fetch Data - Gotcha

// Define a Type for the data you are fetching
// type Tour = {
//   id: string;
//   name: string;
//   info: string;
//   image: string;
//   price: string;
//   // Add more fields as necessary.
//   // something: boolean;
// };

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const response = await fetch(url);
//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data: Tour[] = await response.json();
//     console.log(data);

//     return data;
//   } catch (error) {
//     const errMsg =
//       error instanceof Error ? error.message : "There was a error...";
//     console.error(errMsg);
//     // Throw error
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour) => console.log(tour.name));

///////////////////////////////
// 72. Zod Library

// const tourSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   info: z.string(),
//   image: z.string(),
//   price: z.string()
// });

// // Define a Type for the data you are fetching
// type Tour = z.infer<typeof tourSchema>;

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const response = await fetch(url);
//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const rowData: Tour[] = await response.json();
//     const result = tourSchema.array().safeParse(rowData);

//     console.log(result);

//     if (!result.success) {
//       throw new Error(`Invalid data: ${result.error}`);
//     }

//     return result.data;
//   } catch (error) {
//     const errMsg =
//       error instanceof Error ? error.message : "There was a error...";
//     console.error(errMsg);
//     // Throw error
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour) => console.log(tour.name));

///////////////////////////////
// 73. Zod testing

// Creating a simple string schema
const mySchema = z.string();

// parsing
let testString = mySchema.parse("hello Zod");
// mySchema.parse(5); // throws error

console.log(testString);

// "safe" parsing (doesn't throw error if validation fails)
mySchema.safeParse("hello Zod 2");
mySchema.safeParse(5);

// Creating an object schema
const User = z.object({
  username: z.string(),
  email: z.string().email()
});

// User.parse({
//   username: "milanodituti",
//   email: "test@example.com"
// });

const user = User.safeParse({
  username: "milanodituti",
  email: "test@example.com"
});

type User = z.infer<typeof User>;

console.log(user.data?.username);
