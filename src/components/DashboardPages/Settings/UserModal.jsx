import { Eye, EyeClosed, User, X } from "@phosphor-icons/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddUserModal = ({ open, onClose, onAddUser }) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (!email || !fullName || !role || !password) {
      toast.error("All fields are required!");
      return;
    }
    const newUser = {
      emailAddress: email,
      name: fullName,
      role,
      password,
    };
    onAddUser(newUser);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${open ? "block" : "hidden"}`}
    >
      <div className="absolute inset-0 bg-[#000] opacity-50"></div>
      <div className=" bg-[#fff] rounded-lg shadow-lg p-6 relative z-50 max-w-md w-full mt-8">
        <button onClick={onClose} className="focus:outline-none absolute top-4 right-4">
          <X size={24} color="#677286" />
        </button>
        <div className="flex justify-center items-center mb-4">
          <div className="flex items-center justify-center flex-col">
            <div className="w-16 h-16 bg-[#f0f6fe] rounded-full flex items-center justify-center">
              <User size={32} color="#0d6efd" />
            </div>
            <h2 className="text-xl font-semibold mt-2">New User</h2>
          </div>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm font-normal"
              placeholder="New User's Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm font-normal"
              placeholder="New User's Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm font-normal"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Administrator">Administrator</option>
              <option value="Sales Manager">Sales Manager</option>
              <option value="Sales Representative">Sales Representative</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Create Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm font-normal"
                placeholder="Create a Password for New User"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
              >
                {showPassword ? <EyeClosed size={32} /> : <Eye size={32} />}
              </button>
            </div>
          </div>
          <button
            type="button"
            className="w-full bg-[#0d6efd] text-white py-2 rounded-lg hover:bg-[#5f92e0] text-base font-normal"
            onClick={handleSubmit}
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
