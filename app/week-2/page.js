import Headings from "./headings.js";
import StudentInfo from "./student-info.js";
import Link from "next/link";
export default function Page() {
   
  return (
    // <></> is a fragment, a way to group multiple elements in a single return statement
   // {} is used to switch between JSX and JavaScript
   <main>
    <div className="h-200 w-200 p-5 m-10 text-black bg-slate-600 border border-pink-900 ">
    <Headings/>
    <p>Shopping list</p>
    
    <StudentInfo/>
    
    <Link href="/">Main Page</Link>
    </div>
   </main>
  );  
}