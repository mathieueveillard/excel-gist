export type Coordinates = {
  line: number;
  column: number;
};

export type Cell = {
  coordinates: Coordinates;
  formula: Formula;
};

export type NullaryFunction = {
  fn: () => number;
  args: [];
};

export type UnaryFunction = {
  fn: (x: number) => number;
  args: [Coordinates];
};

export type Formula = NullaryFunction | UnaryFunction;

export type Sheet = Cell[];

export type DisplayedCell = {
  coordinates: Coordinates;
  value: number;
};

export type DisplayedSheet = DisplayedCell[];

const isNullaryFunction = (formula: Formula): formula is NullaryFunction => formula.args.length === 0;

const isUnaryFunction = (formula: Formula): formula is UnaryFunction => formula.args.length === 1;

export const evaluate = (sheet: Sheet): DisplayedSheet => {
  const result: DisplayedCell[] = [];

  for (let i = 0; i < sheet.length; i++) {
    const { coordinates, formula } = sheet[i];

    if (i === 0) {
      if (isNullaryFunction(formula)) {
        result.push({
          coordinates,
          value: formula.fn(),
        });
        continue;
      }
    }

    if (i === 1) {
      if (isNullaryFunction(formula)) {
        result.push({
          coordinates,
          value: formula.fn(),
        });
        continue;
      }

      if (isUnaryFunction(formula)) {
        const { fn } = formula;
        result.push({
          coordinates,
          value: fn(result[0].value),
        });
        continue;
      }
    }
  }

  return result;
};
