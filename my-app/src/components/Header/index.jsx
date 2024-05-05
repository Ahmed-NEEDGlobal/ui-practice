import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/categories"}>Categories</Link>
      <Link href={"/aboutUs"}>About Us</Link>
      <Link href={"/contactUs"}>Contact Us</Link>
    </nav>
  );
};

export default Header;
