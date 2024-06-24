import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";

// icons
import { IoMenu } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/odyssey.svg" alt="logo" width={100} height={0} />
      </Link>

      <ul className="hidden h-full gap-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Link href="/">
          <Button
            variant="default"
            size="lg"
            className="rounded-full gap-1 items-center justify-center text-base font-semibold"
          >
            <FiUser className="w-5 h-5" />
            Ingresar
          </Button>
        </Link>
      </div>

      <IoMenu className="inline-block cursor-pointer h-9 w-9 lg:hidden" />
    </nav>
  );
};

export default Navbar;
