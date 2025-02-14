import Link from 'next/link';

import { APP_NAME } from '@/app-config';

import Container from '../Container';

const HEADER_LINKS = [
  { name: 'Post Card', href: '/postcard' },
  { name: 'Compound Post Card', href: '/compound-postcard' },
  { name: 'Custom Post Card', href: '/custom-postcard' },
  { name: 'Comments', href: '/comments' },
];

export default async function Header() {
  return (
    <header className="mb-12 mt-8">
      <Container>
        <div
          id="header-div"
          className="flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold">
              <Link href={'/'}>{APP_NAME}</Link>
            </p>
            <div className="flex gap-2">
              {HEADER_LINKS.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="rounded-lg bg-lime-100 px-3 py-2"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
