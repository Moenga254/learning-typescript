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

const run = async () => {
  try {
    const users = await fetchUsers();

    users.forEach((user) => {
      console.log(user.company.name); // 👈 changed here
    });

  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error");
    }
  }
};

run();