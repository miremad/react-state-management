export type StateManagementType<T extends {}> = {
  key: string;
  value: T;
};

export type StateManagementContextProps<T extends {}> = {
  data: StateManagementType<T>[];
  // getDataByKey: (key: string) => StateManagementType<T> | undefined;
  storeData: (value: StateManagementType<T>) => void;
};
