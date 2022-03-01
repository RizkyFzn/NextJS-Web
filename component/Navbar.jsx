import Link from 'next/link';
import { withRouter } from 'next/router';

function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Gallery', href: '/gallery' },
    { text: 'Contact', href: '/contact' },
  ];
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link href="/about">
            <a className="logo">kiki.</a>
          </Link>
          <ul className="nav-link">
            {navs.map((nav) => (
              <li key={nav.text}>
                <Link href={nav.href}>
                  <a className={`nav-items ${router.pathname == nav.href ? 'active' : ''}`}>{nav.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default withRouter(Navbar);
