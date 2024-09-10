import Headings from "./week-2/headings"
import Link from "next/link"


export default function Page() {
  return (
    <main>
      <h1>Web Dev 2 Baby </h1>
        <Headings/>
        <ul>
          <li>
            <Link href="week-2">
              Week 2
            </Link>
          </li>

        </ul>
        
    </main>
  )  
}