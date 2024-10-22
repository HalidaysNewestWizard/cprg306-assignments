import Headings from "./week-2/headings";
import Link from "next/link";
import Profile from "./week-3/profile";
import pictureJson from "./picture.json";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <Headings />
      <Profile />
      <ul>
        {pictureJson.map((picture) => (
          <li key={picture.name} className="py-5">
            <p>
              <Image
                src={picture.imageUrl}
                alt={picture.name}
                width={240}
                height={120}
              />
            </p>
          </li>
        ))}
      </ul>

      <ul>
        <li>
          <Link href="week-2">Week 2 Assignment</Link>
        </li>
        <li>
          <Link href="week-3">Week 3 Assignment</Link>
        </li>
        <li>
          <Link href="week-4">Week 4 Assignment</Link>
        </li>
        <li>
          <Link href="week-5">Week 5 Assignment</Link>
        </li>
        <li>
          <Link href="week-6">Week 6 Assignment</Link>
        </li>
      </ul>
    </main>
  );
}
