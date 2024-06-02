"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { ChildrenProps } from "@/types/common.types";
import ToggleColorMode from "../theme/ToggleColorMode";

const ReduxToolkitProvider = ({ children }: ChildrenProps) => {
  return (
    <Provider store={store}>
      <ToggleColorMode> {children}</ToggleColorMode>
    </Provider>
  );
};

export default ReduxToolkitProvider;
