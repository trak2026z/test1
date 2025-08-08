export async function fetchTodayImages() {
  const res = await fetch("https://epic.gsfc.nasa.gov/api/natural");
  if (!res.ok) {
    throw new Error(Nasa Epic API - error);
  }
  return res.json();
}

// Funksja pobierania danych zaty
// Przyklad date wformatie XXXX-XX-XX
export async function fetchImagesByDate(date: string) {
  const res = await fetch(`https://epic.gsfc.nasa.gov/api/natural/date/${date}`);
  if (!res.ok) {
    throw new Error(Nasa Epic API - error);
  }
  return res.json();
}