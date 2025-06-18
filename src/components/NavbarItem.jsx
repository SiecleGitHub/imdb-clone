'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <div>
      <Link
        className={`hover:text-amber-400 font-semibold ${
          genre === param ? 'underline underline-offset-8 text-decoration-4' : ''
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavbarItem;
