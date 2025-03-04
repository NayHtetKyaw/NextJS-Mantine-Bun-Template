import { AppShell, Button, NavLink, Flex, Stack } from "@mantine/core";
import { navigationItems } from "./ApplicationHeaders";

interface MobileNavigationProps {
  opened: boolean;
}

export default function MobileNavigation({ opened }: MobileNavigationProps) {
  return (
    <AppShell.Navbar hidden={!opened} hiddenFrom="sm">
      <Stack align="center" p="sm">
        {/* navigation items */}
        {navigationItems.map((items) => (
          <Flex justify="center" key={items.title} align="center">
            <NavLink
              label={items.title}
              href={items.href}
              // leftSection={items.icon}
            />
          </Flex>
        ))}

        {/* optional button */}
        <Button color="green" w="100%">
          Button
        </Button>
      </Stack>
    </AppShell.Navbar>
  );
}
