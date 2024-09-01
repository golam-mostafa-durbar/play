import React, { useState } from "react";
import SelectField from "./SelectField";

const Form = () => {
  const [addressInfo, setAddressInfo] = useState({
    address: "",
    city: "",
    country: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  const handleChange = (option) => {
    const { value, name } = option;

    setAddressInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(addressInfo);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-1/2 h-max p-8 bg-white shadow-lg rounded">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
          {/* address  */}
          <div className="w-full flex gap-x-4 items-center">
            <p className="w-1/4">Address</p>
            <div className="flex-1">
              <input
                type="text"
                name="address"
                placeholder="Your address"
                value={addressInfo.address}
                required
                onChange={(e) =>
                  setAddressInfo((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
                className="outline-none border-none ring-1 ring-gray-300 text-gray-900 rounded w-full px-2.5 py-[5.5px] focus:ring-[1.7px] focus:ring-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
              />
            </div>
          </div>

          <SelectField onChange={handleChange} />

          {/* phone number  */}
          <div className="w-full flex gap-x-4 items-center">
            <p className="w-1/4">Phone</p>
            <div className="flex-1">
              <input
                type="number"
                name="phone"
                placeholder="Phone number"
                value={addressInfo.phone}
                required
                onChange={(e) =>
                  setAddressInfo((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                className="outline-none border-none ring-1 ring-gray-300 text-gray-900 rounded w-full px-2.5 py-[5.5px] focus:ring-[1.7px] focus:ring-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-gray-500 text-white px-4 py-2 rounded w-max mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
