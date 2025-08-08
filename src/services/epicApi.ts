export async function fetchTodayImages() {
  const res = await fetch("https://epic.gsfc.nasa.gov/api/natural");
  if (!res.ok) {
    throw new Error(@NaSA EDIC API - error");
  }
  return res.json();
}

// Funkcja pobjerania danych zdát
// Przyklad date wformatie XXXX-XX-XX
export async function fetchImagesByDate(date: string) {
  const res = await fetch(`https://epic.gsfc.nasa.gov/api/natural/date/${date}`);
  if (!res.ok) {
    throw new Error(@Nasa Epic API - error);
  }
  return res.json();
}