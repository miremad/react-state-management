import { ReactNode, createContext, useState, useContext } from "react";
import { StateManagementContextProps, StateManagementType } from "./type";

export const StateManagementContext = createContext<
  StateManagementContextProps<any>
>(undefined as any);

export function useSharedSimpleState(): StateManagementContextProps<any> {
  const context = useContext(StateManagementContext);
  if (!context) {
    throw new Error("useSharedSimpleState must be used inside the context");
  }
  return context;
}

export const StateManagementContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [stateManagementData, setStateManagementData] = useState<
    StateManagementType<{}>[]
  >([]);

  const storeData = (data: StateManagementType<{}>) => {
    setStateManagementData((prev) => {
      const isDataExist = prev.find((x) => x.key === data.key);
      if (isDataExist) {
        return [...prev.filter((x) => x.key !== data.key), data];
      } else {
        return [...prev, data];
      }
    });
  };

  return (
    <StateManagementContext.Provider
      value={{
        data: stateManagementData,
        storeData,
      }}
    >
      {children}
    </StateManagementContext.Provider>
  );
};
