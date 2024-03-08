import {
  AppShell,
  Burger,
  Button,
  Group,
  Skeleton,
  Stack,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { foo, bar } from "./db/api";
import { useState } from "react";

export function App() {
  const [opened, { toggle }] = useDisclosure();
  const [name, setName] = useState<string>("");

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>Firebase Template</div>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        Main
        <Stack>
          <Button
            onClick={() => {
              foo();
            }}
          >
            foo
          </Button>
          <TextInput
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          ></TextInput>
          <Button
            onClick={() => {
              bar(name);
            }}
          >
            bar
          </Button>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
export default App;
