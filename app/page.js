import Headings from "./week-2/headings";
import Link from "next/link";
import Profile from "./week-3/profile";
import Bean from "/public/images/Bean.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <Headings/>
      <Profile/>
      {/* <Image src={Bean} alt="The BEAN" className='h-30 w-50'/> */}
        
      <ul>
        <li>
          <Link href="week-2">
            Week 2 Assignment
          </Link>            
        </li>
        <li>
          <Link href="week-3">
            Week 3 Assignment
          </Link>
        </li>
        <li>
          <Link href="week-4">
            Week 4 Assignment
          </Link>
        </li>
      </ul>
    </main>
  )  
}
