export async function fetchTodayImages() {
  const res = await fetch("https://epic.gsfc.nasa.gov/api/natural");
  if (!res.ok) throw new Error(\"@error pobierania danych z NASA EPIC\");
  return res.json();
}

export async function fetchImagesByDate(date: string) {
  const res = await fetch(`https://epic.gsfc.nasa.gov/api/natural/date/${date}`);
  if (!res.ok) throw new Error(\"@error pobierania danych z NASA EPIC\");
  return res.json();
}