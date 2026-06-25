export async function getCases(search = "") {
  const response = await fetch(`/api/cases?q=${encodeURIComponent(search)}`);

  if (!response.ok) {
    throw new Error("Error obteniendo los casos");
  }

  return response.json();
}
