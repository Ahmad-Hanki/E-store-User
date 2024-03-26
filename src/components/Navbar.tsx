import React from "react";
import Container from "./ui/Container";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categorys";
import NavbarActions from "./NavbarActions";

export const revalidate = 0;

export const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className=" border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link className="ml-4 flex l:ml-0 gap-x-2" href={"/"}>
            <p className="font-bold text-xl"> STORE </p>{" "}
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
