/// <reference path="testing.d.ts" />

import {Run} from "./browser";

describe("Browser", () => {
	it("should work", () => {
		expect(() => Run()).not.toThrow();
	});
});
