import * as React from "react";
import Row from "./Row";
import Head from "./Head";

const Component: React.FunctionComponent = () => {
  return (
    <table className="text-center">
      <thead>
        <Head />
      </thead>
      <tbody>
        <Row rowCount={1} />
        <Row rowCount={2} />
        <Row rowCount={3} />
        <Row rowCount={4} />
        <Row rowCount={5} />
      </tbody>
    </table>
  );
};

export default Component;
