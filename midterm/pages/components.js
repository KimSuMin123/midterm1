import Link from "next/link";


const Nav = () => {
  return (
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/About'>About</Link>
        </li>
        <li>
          <Link href='/Contact'>Contact</Link>
        </li>
      </ul>
  );
};

export default Nav;