import Headings from "./headings.js";

export default function Page() {
    let a = 10;
    let b = 25;
    let c = a + b;
  return (
    // <></> is a fragment, a way to group multiple elements in a single return statement
   // {} is used to switch between JSX and JavaScript
    <main>
        <Headings/>
 
        <p>Sum of {a} and {b} is {c} </p>

    </main>
  );  
}