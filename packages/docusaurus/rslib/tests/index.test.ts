import { expect, test } from "vitest";
import { createRsLibConfig } from "../src/index";

test("squared", () => {
	expect(createRsLibConfig({ preset: "dual" })).toMatchSnapshot();
});
