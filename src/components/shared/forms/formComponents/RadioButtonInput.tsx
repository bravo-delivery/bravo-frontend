import { Field } from "formik";
import { ReactNode } from "react";

interface CustomizedInputProps {
  fieldName: string;
  label: string | ReactNode;
  value: string;
  fieldClassName?: string;
}

const labelStyles =
  "relative cursor-pointer flex items-center gap-x-[19px] text-14med xl:text-16med text-greyDark";
const fieldStyles =
  "relative cursor-pointer appearance-none size-[19px] rounded-full outline-none transition duration-300 ease-out";

export default function RadioButtonInput({
  fieldName,
  label = "",
  value = "",
  fieldClassName = "",
}: CustomizedInputProps) {
  return (
    <label className={labelStyles}>
      <Field
        name={fieldName}
        type="radio"
        value={value}
        autoComplete="on"
        className={`${fieldStyles} ${fieldClassName} border border-black checked:bg-green checked:border-green transition duration-300 ease-in-out`}
      ></Field>
      <p>{label}</p>
    </label>
  );
}
