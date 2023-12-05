import * as React from "react";
import RowCount from "./RowCount";
import Cell from "./Cell";

type Props = {
  rowCount: number;
};

const Component: React.FunctionComponent<Props> = ({ rowCount }) => (
  <tr className="h-8">
    <RowCount value={rowCount} />
    {new Array(5).fill("").map((_, index) => (
      <Cell key={index} />
    ))}
  </tr>
);

export default Component;
