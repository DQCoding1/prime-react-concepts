//theme
import "primereact/resources/themes/viva-dark/theme.css"
//core
import "primereact/resources/primereact.min.css";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { Divider } from "primereact/divider";
import { useState } from "react";

type FormValues = {
  inputText: string;
  inputPassword: string;
  inputRadio: string;
  inputSelect: string
};

const initialFormValues = {
  inputText: "",
  inputPassword: "",
  inputRadio: "",
  inputSelect: "",
};

const formValuesKeys = {
  inputText: "inputText",
  inputPassword: "inputPassword",
  inputRadio: "inputRadio",
  inputSelect: "inputSelect",
};

const ingredients = {
  cheese: "cheese",
  mushroom: "mushroom",
  pepper: "pepper",
};

type City = {
  name: string;
  code: string;
}

const cities: City[] = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
];


function Form() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const updateFormValues = (
    e: React.ChangeEvent<HTMLInputElement> | RadioButtonChangeEvent,
    key: string
  ) => {
    setFormValues({ ...formValues, [key]: e.target.value });
  };

  return (
    <form action="" style={{"padding": "2rem"}}>
      <span className="p-float-label">
        <InputText
          className="p-inputtext-lg"
          value={formValues?.inputText}
          onChange={(e) => updateFormValues(e, formValuesKeys.inputText)}
        />
        <label htmlFor="username">Username</label>
      </span>
      <Divider />
      <span className="p-float-label">
        <Password
          inputId="password"
          value={formValues?.inputPassword}
          onChange={(e) => updateFormValues(e, formValuesKeys.inputPassword)}
        />
        <label htmlFor="password">Password</label>
      </span>
      <Divider />
      <RadioButton
        inputId="ingredient1"
        name="pizza"
        value="cheese"
        checked={formValues.inputRadio === ingredients.cheese}
        onChange={(e) => updateFormValues(e, formValuesKeys.inputRadio)}
      />
      <label htmlFor="ingredient1" className="ml-2">
        Cheese
      </label>
      <RadioButton
        inputId="ingredient2"
        name="pizza"
        value="mushroom"
        checked={formValues.inputRadio === ingredients.mushroom}
        onChange={(e) => updateFormValues(e, formValuesKeys.inputRadio)}
      />
      <label htmlFor="ingredient2" className="ml-2">
        Mushroom
      </label>
      <RadioButton
        inputId="ingredient3"
        name="pizza"
        value="pepper"
        checked={formValues.inputRadio === ingredients.pepper}
        onChange={(e) => updateFormValues(e, formValuesKeys.inputRadio)}
      />
      <label htmlFor="ingredient3" className="ml-2">
        Pepper
      </label>
      <Divider />
      <div>
        <Dropdown
          value={formValues.inputSelect}
          onChange={(e) => updateFormValues(e, formValuesKeys.inputSelect)}
          options={cities}
          optionLabel="name"
          placeholder="Select a City"
          className="w-full md:w-14rem"
        />
      </div>
    </form>
  );
}

export default Form;
