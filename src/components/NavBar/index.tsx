'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Divider
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

const NavBarComponent: React.FC = () => {
  const pathname = usePathname();
  return(
    <>
      <Navbar maxWidth="full">
        <NavbarBrand>
          <Link href="/" color="foreground">
            <div className="logo-sm"></div>
            <p className="ml-2 font-bold text-inherit">SESPINOSA</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem isActive={pathname === '/blog'}>
            <Link href="/blog" color={pathname !== "/blog" ? "foreground" : undefined}>
              Blog
            </Link>
          </NavbarItem>
          {/* <NavbarItem isActive={pathname === '/projects'}>
            <Link href="/projects" color={pathname !== "/projects" ? "foreground" : undefined}>
              Projects
            </Link>
          </NavbarItem> */}
          <NavbarItem isActive={pathname === '/experiments'}>
            <Link href="/experiments" color={pathname !== "/experiments" ? "foreground" : undefined}>
              Experiments
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === '/about'}>
            <Link href="/about" color={pathname !== "/about" ? "foreground" : undefined}>
              About me
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign In
          </Button>
        </NavbarContent>
      </Navbar>
      <Divider />
    </>
  );
};

export default NavBarComponent;