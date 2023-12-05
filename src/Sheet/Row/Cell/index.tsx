import * as React from "react";

type Props = {
  value?: number;
};

const Component: React.FunctionComponent<Props> = ({ value }) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);

  const toggle = (): void => {
    setIsSelected(!isSelected);
  };

  return (
    <td
      className={`border w-20 ${
        isSelected ? "border-2 border-black" : "border-1"
      }`}
      onClick={toggle}
    >
      {value}
    </td>
  );
};

export default Component;
