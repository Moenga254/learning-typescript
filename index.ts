interface User {
  name: string;
  email: string;
  company: {
    name: string;
  };
}

const displayUsers = (users: User[], query = ""): void => {
  const results = document.getElementById("results") as HTMLDivElement;
  const status = document.getElementById("status") as HTMLDivElement;

  results.innerHTML = "";

  if (users.length === 0) {
    const message = query ? `No users found for "${query}"` : "No users found";

    status.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        <p class="empty-state__message">${message}</p>
        ${query ? `<p class="empty-state__hint">Try adjusting your search term.</p>` : ""}
      </div>
    `;
  } else {
    status.innerHTML = "";

    users.forEach((user) => {
      const div = document.createElement("div");
      div.className = "user";

      div.innerHTML = `
        <p><strong>${user.name}</strong></p>
        <p>${user.email}</p>
        <p>${user.company.name}</p>
      `;

      results.appendChild(div);
    });
  }
};