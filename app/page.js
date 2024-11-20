import Headings from './week-2/headings';
import Link from 'next/link';
import Profile from './week-3/profile';
import pictureJson from './picture.json';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <Headings />
      <Profile />

      <ul>
        <li>
          <Link href='week-2'>Week 2 Assignment</Link>
        </li>
        <li>
          <Link href='week-3'>Week 3 Assignment</Link>
        </li>
        <li>
          <Link href='week-4'>Week 4 Assignment</Link>
        </li>
        <li>
          <Link href='week-5'>Week 5 Assignment</Link>
        </li>
        <li>
          <Link href='week-6'>Week 6 Assignment</Link>
        </li>
        <li>
          <Link href='week-7'>Week 7 Assignment</Link>
        </li>
        <li>
          <Link href='week-8'>Week 8 Assignment</Link>
        </li>
        <li>
          <Link href='week-9'>Week 9 Assignment</Link>
        </li>
        <li>
          <Link href='week-10'>Week 10 Assignment</Link>
        </li>
        <li>
          <Link href='react-pract'>Don't worry about this</Link>
        </li>
      </ul>
      <ul>
        {pictureJson.map((picture) => (
          <li
            key={picture.name}
            className=' my-5 w-44 h-60 rounded-md'>
            <p>
              <img
                className='w-44 h-88 rounded-md'
                src={picture.imageUrl}
                alt={picture.name}
                width={240}
                height={120}
              />
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
