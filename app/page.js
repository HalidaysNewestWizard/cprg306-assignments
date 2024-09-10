import Headings from "./week-2/headings"
import Link from "next/link"


export default function Page() {
  return (
    <main>
      
        <Headings/>
        <ul>
          <li>
            <Link href="week-2">
              Student Info
            </Link>
          </li>

        </ul>
        
    </main>
  )  
}