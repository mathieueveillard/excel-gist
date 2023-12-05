import { DisplayedSheet, Sheet, evaluate } from ".";

test("", () => {
  // GIVEN
  const sheet: Sheet = [
    {
      coordinates: {
        line: 0,
        column: 0,
      },
      formula: {
        fn: () => 0,
        args: [],
      },
    },
  ];

  // WHEN
  const actual = evaluate(sheet);

  // THEN
  const expected: DisplayedSheet = [
    {
      coordinates: {
        line: 0,
        column: 0,
      },
      value: 0,
    },
  ];
  expect(actual).toEqual(expected);
});

test("", () => {
  // GIVEN
  const sheet: Sheet = [
    {
      coordinates: {
        line: 0,
        column: 0,
      },
      formula: {
        fn: () => 1,
        args: [],
      },
    },
  ];

  // WHEN
  const actual = evaluate(sheet);

  // THEN
  const expected: DisplayedSheet = [
    {
      coordinates: {
        line: 0,
        column: 0,
      },
      value: 1,
    },
  ];
  expect(actual).toEqual(expected);
});

test("", () => {
  // GIVEN
  const sheet: Sheet = [
    {
      coordinates: {
        line: 0,
        column: 0,
      },
      formula: {
        fn: () => 0,
        args: [],
      },
    },
    {
      coordinates: {
        line: 0,
        column: 1,
      },
      formula: {
        fn: () => 1,
        args: [],
      },
    },
  ];

  // WHEN
  const actual = evaluate(sheet);

  // THEN
  const expected: DisplayedSheet = [
    {
      coordinates: {
        line: 0,
        column: 0,
      },
      value: 0,
    },
    {
      coordinates: {
        line: 0,
        column: 1,
      },
      value: 1,
    },
  ];
  expect(actual).toEqual(expected);
});

test("", () => {
  // GIVEN
  const sheet: Sheet = [
    {
      coordinates: {
        line: 0,
        column: 0,
      },
      formula: {
        fn: () => 0,
        args: [],
      },
    },
    {
      coordinates: {
        line: 0,
        column: 1,
      },
      formula: {
        fn: (x) => x + 1,
        args: [
          {
            line: 0,
            column: 0,
          },
        ],
      },
    },
  ];

  // WHEN
  const actual = evaluate(sheet);

  // THEN
  const expected: DisplayedSheet = [
    {
      coordinates: {
        line: 0,
        column: 0,
      },
      value: 0,
    },
    {
      coordinates: {
        line: 0,
        column: 1,
      },
      value: 1,
    },
  ];
  expect(actual).toEqual(expected);
});
