const subject = require(".");

describe("Bot protection", () => {
  it("should detect bot from logged actions", () => {
    const actions = [
      "left",
      "right",
      "fire",
      "jump",
      "fire",
      "back",
      "forward",
      "forward",
      "jump",
      "fire",
      "back",
      "left",
      "left",
      "right",
    ];
    expect(subject.botProtection(actions)).toEqual(true);

    const moreActions = [
      "left",
      "right",
      "left",
      "fire",
      "left",
      "right",
      "fire",
      "right",
    ];
    expect(subject.botProtection(moreActions)).toEqual(false);
  });
});
