export async function getUsers(searchTerm) {
  const response = await fetch(
    `${import.meta.env.VITE_API}${searchTerm}`
  );
  const data = await response.json();
  return data;
}

export async function getUserProfile(username) {
  const response = await fetch(`${import.meta.env.VITE_API_USER}${username}`);
  const data = await response.json();
  return data;
}

