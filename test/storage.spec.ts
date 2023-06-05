import {
  initializeTestEnvironment,
  RulesTestEnvironment,
} from "@firebase/rules-unit-testing";
import * as fs from "fs";
import "mocha";

describe("storage test", () => {
  let testEnv: RulesTestEnvironment;
  beforeEach(async () => {
    console.log("*** ERROR here in v12.2.1 !!! ***");
    testEnv = await initializeTestEnvironment({
      storage: { rules: fs.readFileSync("./storage.rules", "utf8") },
    });
  });

  it("should do nothing", async () => {});
});
