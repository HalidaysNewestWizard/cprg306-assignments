import ItemList from "./item-list";
import Headings from "../week-2/headings";
import Link from "next/link";
import Return from "../return";

export default function Page() {
  return (
    <main>
      <Headings />

      <ItemList />
      <Return />
    </main>
  );
}
