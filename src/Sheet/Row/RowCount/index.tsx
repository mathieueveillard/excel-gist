import * as React from "react";

type Props = {
  value: number;
};

const Component: React.FunctionComponent<Props> = ({ value }) => (
  <td className="border w-20">{value}</td>
);

export default Component;
