import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
interface Permission {
  module: string;
  access: boolean;
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
}

const tableHeader = [
  "Moduel",
  "Access Permission",
  "View",
  "Create",
  "Edit",
  "Delete",
];

const sampleData = [
  {
    module: "Dashboard",
    access: true,
    view: true,
    create: true,
    edit: true,
    delete: true,
  },
  {
    module: "Order History",
    access: true,
    view: true,
    create: true,
    edit: true,
    delete: true,
  },
  {
    module: "Item",
    access: true,
    view: true,
    create: true,
    edit: true,
    delete: true,
  },
  {
    module: "Products",
    access: true,
    view: true,
    create: true,
    edit: true,
    delete: true,
  },
  {
    module: "Branch",
    access: true,
    view: true,
    create: true,
    edit: true,
    delete: true,
  },
  {
    module: "Inventory",
    access: true,
    view: true,
    create: true,
    edit: true,
    delete: true,
  },
  {
    module: "User",
    access: true,
    view: true,
    create: true,
    edit: true,
    delete: true,
  },
  {
    module: "Department",
    access: true,
    view: true,
    create: true,
    edit: true,
    delete: true,
  },
  {
    module: "KB",
    access: false,
    view: false,
    create: false,
    edit: false,
    delete: false,
  },
];

const header = "Administrator";
type CustomCheckBoxProps = {
  onChange: (index: number, name: keyof Permission, e: boolean) => void;
  item: boolean;
  index: number;
  name: keyof Permission;
};
const CustomCheckbox = ({
  onChange,
  item,
  index,
  name,
}: CustomCheckBoxProps) => {
  return (
    <label className="relative flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="appearance-none peer"
        checked={item}
        onChange={(e) => onChange(index, name, e.target.checked)}
      />
      <span className="w-5 h-5 border-2 border-cyan-400 rounded-full flex items-center justify-center transition-colors duration-200 peer-checked:border-gray-500">
        <span
          className={`w-2.5 h-2.5 bg-cyan-500 rounded-full transition-opacity duration-200 peer-checked:opacity-100 ${
            item ? "opacity-100" : "opacity-0"
          }`}
        ></span>
      </span>
    </label>
  );
};
export default function SystemAccess() {
  const [state, setState] = useState(true);
  //   const handleChange = () => {};

  const [permissions, setPermissions] = useState<Permission[]>(sampleData);

  const handleChange = (
    index: number,
    field: keyof Permission,
    value: boolean
  ) => {
    const updatedPermissions = [...permissions];
    updatedPermissions[index] = {
      ...updatedPermissions[index],
      [field]: value,
    };
    setPermissions(updatedPermissions);
  };
  const navigate = useNavigate();
  const handleGoBack = () => {
    // Check if there is a history entry to go back to
    if (window.history.length > 1) {
      navigate(-1); // Go back one step in the history
    } else {
      navigate("/"); // Fallback to the home page
    }
  };
  return (
    <div className="m-3">
      <div className="flex items-center gap-2">
        <button
          className="px-2 bg-[#17a948] text-white rounded-md"
          onClick={handleGoBack}
        >
          &larr;
        </button>
        <h2 className="text-2xl font-semibold">{header}</h2>
      </div>
      <div className="w-full p-2 rounded-md">
        <table className="w-full border">
          <thead>
            <tr>
              {tableHeader.map((header, index) => (
                <th
                  key={`header-${index}`}
                  className="border-b py-4 bg-gray-100"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {permissions.map((item, index) => (
              <tr
                key={`item-${index}`}
                className={`${index % 2 == 0 ? "" : "bg-gray-100"}`}
              >
                <td className="py-3">
                  <div className="flex justify-center ">
                    <select
                      name="module"
                      id=""
                      className="w-36 border px-2 py-1"
                    >
                      <option value="{item.module}">{item.module}</option>
                    </select>
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex justify-center py-2">
                    <label className="relative inline-block w-12 h-6">
                      <input
                        type="checkbox"
                        className="opacity-0 w-0 h-0 peer"
                        checked={item.access}
                        name="access"
                        onChange={(e) =>
                          handleChange(index, "access", e.target.checked)
                        }
                      />
                      <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-all duration-300 peer-checked:bg-cyan-500"></span>
                      <span className="absolute left-1 bottom-1 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-5"></span>
                    </label>
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex justify-center py-2">
                    <CustomCheckbox
                      onChange={handleChange}
                      index={index}
                      item={item.view}
                      name={"view"}
                    />
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex justify-center py-2">
                    <CustomCheckbox
                      onChange={handleChange}
                      index={index}
                      item={item.create}
                      name={"create"}
                    />
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex justify-center py-2">
                    <CustomCheckbox
                      onChange={handleChange}
                      index={index}
                      item={item.edit}
                      name={"edit"}
                    />
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex justify-center py-2">
                    <CustomCheckbox
                      onChange={handleChange}
                      index={index}
                      item={item.delete}
                      name={"delete"}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
