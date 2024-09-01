import React from "react";

const tableData = [
  {
    id: 1,
    name: "Product 1",
    color: "Red",
    category: "Laptop",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    color: "Blue",
    category: "Laptop PC",
    price: 120,
  },
  {
    id: 3,
    name: "Product 3",
    color: "Green",
    category: "Accessories",
    price: 100,
  },
  {
    id: 4,
    name: "Product 4",
    color: "Yellow",
    category: "Electronics",
    price: 120,
  },
];

const Table = () => {
  const handleClick = (id) => {
    console.log("id: ", id);

    // TODO: Redirect the view page
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-3/4 relative overflow-x-auto shadow-lg sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData?.length > 0 &&
              tableData.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.color}</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">${item.price}</td>
                  <td
                    className="px-6 py-4"
                    onClick={() => handleClick(item.id)}
                  >
                    <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                      View
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
