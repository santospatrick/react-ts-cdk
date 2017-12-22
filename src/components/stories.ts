import { configure } from "@storybook/react";

const req: any = require.context("./", true, /\.story\.tsx$/);

function loadStories(): void {
  req.keys().forEach((filename: string) => req(filename));
}

configure(loadStories, module);
