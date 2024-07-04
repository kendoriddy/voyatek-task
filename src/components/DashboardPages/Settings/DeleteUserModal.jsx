import React from "react";
import { Trash, X } from "@phosphor-icons/react";
import { toast } from "react-toastify";

const DeleteUserModal = ({ open, onClose, onDeleteUser, user }) => {
  const handleDelete = () => {
    onDeleteUser(user.id);
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
            <h2 className="text-xl font-semibold mt-2">Delete this user</h2>
            <p className="text-base font-normal text-center">
              This user and all associated data will be permanently removed. Do you wish to continue
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="w-full bg-[#f7f9fc] text-[#475367] py-2 rounded-lg hover:bg-[#4b5563] text-base font-normal"
            onClick={onClose}
          >
            Cancel action
          </button>
          <button
            type="button"
            className="w-full bg-[#fbeae9] text-[#D42620] py-2 rounded-lg hover:bg-[#dc2626] text-base font-normal flex items-center justify-center gap-0"
            onClick={handleDelete}
          >
            <Trash color="#D42620" size={20} /> <span> Yes, Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
