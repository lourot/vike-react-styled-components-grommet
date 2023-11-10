import React from "react";
import { Counter } from "./Counter";

import { Grommet, Box, Text } from "grommet";

export default function Page() {
  return (
    <Grommet
      theme={{
        global: {
          colors: { doc: "#ff99cc" },
        },
      }}
    >
      <h1>My Vike app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <Box pad="large" background="doc">
        <Text color="red">Grommet box</Text>
      </Box>
    </Grommet>
  );
}
