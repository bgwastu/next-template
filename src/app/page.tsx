import { Button, Container, Text } from "@mantine/core";

export default function Home() {
  return (
    <Container>
      <Text>Hello world!</Text>
      <Button>Mantine Button</Button>
      <Text className="text-red-800">
        Checking if Tailwind works. This text should be red.
      </Text>
    </Container>
  );
}
