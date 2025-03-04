import { Burger, Button, Title, Flex, Box, NavLink } from "@mantine/core";
import { AppShell } from "@mantine/core";
import Link from "next/link";
// import {
//   IconInfoSquareRoundedFilled,
//   IconHomeFilled,
// } from "@tabler/icons-react";
import { ReactElement } from "react";

// component Props
interface ApplicationHeaderProps {
  opened: boolean;
  toggle: () => void;
}

// navigation item types
interface NavigationItems {
  title: string;
  href: string;
  icon?: ReactElement;
}

export const navigationItems: NavigationItems[] = [
  {
    title: "Home",
    href: "/home",
    // icon: <IconHomeFilled size={18} />,
  },

  {
    title: "About",
    href: "/about",
    // icon: <IconInfoSquareRoundedFilled size={18} />,
  },
];

export default function ApplicatoinHeaders({
  opened,
  toggle,
}: ApplicationHeaderProps) {
  return (
    <AppShell.Header>
      <Flex justify="start" gap="sm" align="center" h="100%" px="sm" w="100%">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="md" />
        {/* Logo */}
        <Box m="xs">
          <Link href="/">
            <Title order={1}>Logo</Title>
          </Link>
        </Box>
        {/*  Navigation items  */}
        <Flex align="center" justify="end" w="100%" gap="md" visibleFrom="sm">
          {navigationItems.map((items) => (
            <Box key={"navitem" + items.title}>
              <NavLink
                href={items.href} // item's link
                label={items.title} // items's lable
                fw="bold"
                // leftSection={items.icon} //optional navigation icons
              />
            </Box>
          ))}
        </Flex>
        {/* Optional Button  */}
        <Button
          color="green"
          miw={100}
          className="justify-self-end"
          visibleFrom="sm"
        >
          Button
        </Button>
      </Flex>
    </AppShell.Header>
  );
}
