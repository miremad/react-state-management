import { useSharedSimpleState } from "../../state-management";
import "./style.css";

type CartPropsType = {
  stateKey: string;
};

export const Cart = (props: CartPropsType) => {
  const { data: stateManagementData } = useSharedSimpleState();
  const data = stateManagementData.find((x) => x.key === props.stateKey);

  return (
    <>
      {data && (
        <div className="cart">
          <div>{JSON.stringify(data)}</div>
        </div>
      )}
    </>
  );
};
