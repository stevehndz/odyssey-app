import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <h1 className="text-teal-500 font-bold">Odyssey</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
