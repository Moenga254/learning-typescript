type Address = {
  city: string;
};

type Company = {
  name: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  address: Address;
  company: Company;
};

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

const displayUsers = (users: User[]): void => {
  const filteredUsers = users.filter((user) => user.address.city === "Gwenborough");

  filteredUsers.forEach((user) => {
    console.log("Name:", user.name);
    console.log("City:", user.address.city);
    console.log("----------------------");
  });
};

const run = async () => {
  try {
    const users = await fetchUsers();
    displayUsers(users);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error");
    }
  }
};

run();