import { headers } from "next/headers";

export default async function Page() {
  const res = await fetch("http://counting-service:9001", {
    headers: headers(),
  });
  const { count } = await res.json();
  return <pre>{count}</pre>;
}
