"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  badge = "✨ Your Website Builder",
  heading = "Blocks Built With Mantine & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Mantine. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Discover all components",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "View on GitHub",
      url: "https://www.shadcnblocks.com",
    },
  },
  image = {
    src: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) => {
  return (
    <Box py={80}>
      <Container size="lg">
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack align="center" gap="xl" ta={{ base: "center", lg: "left" }}>
              {badge && (
                <Badge
                  variant="light"
                  color="gray"
                  radius="sm"
                  rightSection={<Box component={ArrowUpRight} size={14} />}
                >
                  {badge}
                </Badge>
              )}

              <Title order={1} size="h1" fw={700}>
                {heading}
              </Title>

              <Text c="dimmed" size="xl" maw={600}>
                {description}
              </Text>

              <Flex justify={{ base: "center", lg: "flex-start" }} gap="sm">
                {buttons.primary && (
                  <Button
                    component="a"
                    href={buttons.primary.url}
                    size="md"
                    radius="md"
                    variant="filled"
                  >
                    {buttons.primary.text}
                  </Button>
                )}
                {buttons.secondary && (
                  <Button
                    component="a"
                    href={buttons.secondary.url}
                    size="md"
                    radius="md"
                    variant="outline"
                    rightSection={<Box component={ArrowRight} size={16} />}
                  >
                    {buttons.secondary.text}
                  </Button>
                )}
              </Flex>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Image
              src={image.src}
              alt={image.alt}
              radius="md"
              h={{ base: 300, lg: 400 }}
              style={{ objectFit: "cover" }}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero1;
