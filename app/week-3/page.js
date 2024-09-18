import ItemList from "./item-list";
import Headings from "../week-2/headings";
import Link from "next/link";


export default function Page() {
  return (
    <main >
      <Headings className=" text-red-600"/>
     <ItemList className=" bg-cyan-400 border border-purple-800"/>
     <Link href="/">Main Page</Link>
    </main>
  );
}