import React from "react";
import Select from "react-select";

const cityOptions = {
  title: "City",
  options: [
    { value: 1, label: "Mirpur", name: "city" },
    { value: 2, label: "Shyamoli", name: "city" },
    { value: 3, label: "Mohakhali", name: "city" },
  ],
};
const countryOptions = {
  title: "Country",
  options: [
    { value: 11, label: "Bangladesh", name: "country" },
    { value: 22, label: "Australia", name: "country" },
    { value: 33, label: "England", name: "country" },
  ],
};
const stateOptions = {
  title: "State",
  options: [
    { value: 111, label: "Dhaka", name: "state" },
    { value: 222, label: "Sylhet", name: "state" },
    { value: 3333, label: "Comilla", name: "state" },
  ],
};
const zipCodeOptions = {
  title: "Zip Code",
  options: [
    { value: 1216, label: "1212", name: "zipCode" },
    { value: 1212, label: "1216", name: "zipCode" },
    { value: 1220, label: "1220", name: "zipCode" },
  ],
};

const options = [cityOptions, stateOptions, zipCodeOptions, countryOptions];

const SelectField = ({ onChange }) => {
  return (
    <div className="w-full flex flex-col gap-y-3">
      {options.length > 0 &&
        options.map((option, index) => (
          <div className="w-full flex gap-x-4 items-center" key={index + 1}>
            <p className="w-1/4">{option.title}</p>
            <div className="flex-1">
              <Select
                required
                defaultValue
                onChange={onChange as any}
                options={option.options as any}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SelectField;
