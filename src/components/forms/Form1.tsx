import { useSharedSimpleState } from "../../state-management";
import "./style.css";

type FormInputType = {
  name: string;
  age: number;
};
export const Form1 = () => {
  const { storeData } = useSharedSimpleState();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data: FormInputType = {
      name: (event.currentTarget.elements[0] as HTMLInputElement).value,
      age: Number((event.currentTarget.elements[1] as HTMLInputElement).value),
    };

    storeData({
      key: "first-data",
      value: data,
    });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" required placeholder="name" />
        <input type="text" name="age" required placeholder="age" />

        <button type="submit" value="submit">
          submit
        </button>
      </form>
    </div>
  );
};
