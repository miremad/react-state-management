import { useSharedSimpleState } from "../../state-management";
import "./style.css";

type FormInputType = {
  firstname: string;
  lastname: string;
  job: string;
};
export const Form2 = () => {
  const { storeData } = useSharedSimpleState();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data: FormInputType = {
      firstname: (event.currentTarget.elements[0] as HTMLInputElement).value,
      lastname: (event.currentTarget.elements[1] as HTMLInputElement).value,
      job: (event.currentTarget.elements[2] as HTMLInputElement).value,
    };

    storeData({
      key: "second-data",
      value: data,
    });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" required placeholder="firstname" />
        <input type="text" name="lastname" required placeholder="lastname" />
        <input type="text" name="job" required placeholder="job" />

        <button type="submit" value="submit">
          submit
        </button>
      </form>
    </div>
  );
};
