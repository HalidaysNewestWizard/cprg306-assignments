import Headings from "./headings.js";
import StudentInfo from "./student-info.js";
import Link from "next/link";
export default function Page() {
   
  return (
    // <></> is a fragment, a way to group multiple elements in a single return statement
   // {} is used to switch between JSX and JavaScript
   <main>
    <StudentInfo/>
    <Link href="/">Main Page</Link>
   </main>
  );  
}