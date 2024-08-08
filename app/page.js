export default async function Page() {
  console.log(process.memoryUsage().rss / (1024 * 1024));
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  return !!data;
}

export const revalidate = 0;
