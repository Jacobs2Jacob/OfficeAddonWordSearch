import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

type Props = {
  message: string;
};

export const ErrorAlert = ({ message }: Props) => {
  return (
    <Alert status="error">
      <AlertIcon />
      {message}
    </Alert>
  );
};
