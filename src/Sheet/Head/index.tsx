import * as React from "react";
import ColumnCount from "./ColumnCount";
import Nothing from "./Nothing";

const Component: React.FunctionComponent = () => (
  <tr className="h-8">
    <Nothing />
    {new Array(5).fill("").map((_, index) => (
      <ColumnCount key={index} value={index + 1} />
    ))}
  </tr>
);

export default Component;
