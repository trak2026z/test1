export async function fetchTodayImages() {
  const res = await fetch("https://epic.gsfc.nasa.gov/api/natural");
  if (!res.ok) {
    throw new Error("NASA Epic API - error");
  }
  return res.json();
}

// Funkcja pobierania danych zaty
// Przyklad daty wformatie XXXX-XX-XX
export async function fetchImagesByDate(date: string) {
  const res = await fetch(`https://epic.gsfc.nasa.gov/api/natural/date/${date}`);
  if (!res.ok) {
    throw new Error("NASA Epic API - error");
  }
  return res.json();
}