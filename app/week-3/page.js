import ItemList from "./item-list";
import Headings from "../week-2/headings";
import Link from "next/link";



export default function Page() {
  return (
    <main >
      <Headings/>
     {/* <img src={require('./images/bean.jpg')} alt="The BEAN"className='h-300 w-100'/> */}
     
     <ItemList />
     <Link href="/">Main Page</Link>
    </main>
  );
}