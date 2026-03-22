type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

const run = async () => {
  const users = await fetchUsers();

  users.forEach((user) => {
    console.log(user.email);
  });
};

run();