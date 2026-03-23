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
  return res.json();
};

const displayUsers = (users: User[]): void => {
  const results = document.getElementById("results") as HTMLDivElement;
  results.innerHTML = "";

  users.forEach((user) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>${user.name}</strong></p>
      <p>${user.email}</p>
      <p>${user.company.name}</p>
      <hr/>
    `;
    results.appendChild(div);
  });
};

const run = async () => {
  const users = await fetchUsers();

  const input = document.getElementById("search") as HTMLInputElement;

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();

    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(value)
    );

    displayUsers(filtered);
  });

  displayUsers(users);
};

run();