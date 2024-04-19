"use client";

// Importing necessary dependencies and components
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Label } from "./ui/label";
import { Input } from "./ui/input";

// FormModel component function
export default function FormModel({ id, firstName, lastName, email, department, onUpdate, add, onAdd }) {
  // State variable to control modal open/close
  const [open, setOpen] = useState(false);
  
  // Function to handle modal open
  const handleOpen = () => setOpen(true);
  
  // Function to handle modal close
  const handleClose = () => setOpen(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (add) {
      onAdd(formData); // Call onAdd function for adding new data
    } else {
      onUpdate(formData); // Call onUpdate function for updating existing data
    }
    handleClose(); // Close the modal after submission
  };

  // State variable and function to manage form data
  const [formData, setFormData] = useState({
    firstName: add ? "" : firstName,
    lastName: add ? "" : lastName,
    email: add ? "" : email,
    department: add ? "" : department,
  });

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Component for bottom gradient effect
  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };

  // Rendering the JSX
  return (
    <div>
      {/* Button to trigger modal */}
      <Button onClick={handleOpen} color="secondary">
        {add ? "Add new data" : "Edit →"}
      </Button>
      
      {/* Modal component */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
          <h2 className="font-bold text-xl text-neutral-200">
            Update User Data
          </h2>

          {/* Form inside the modal */}
          <form className="my-8" onSubmit={handleSubmit}>
            {/* Input fields for first name and last name */}
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <div className='d-flex mb-4 '>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="First name..." type="text" name='firstName' value={formData.firstName} onChange={handleChange} required/>
              </div>

              <div className='d-flex mb-4 '>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Last name..." type="text" name='lastName' value={formData.lastName} onChange={handleChange} required/>
              </div>
            </div>

            {/* Input field for email */}
            <div className='d-flex mb-4'>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="projectmayhem@fc.com" type="email" name='email' value={formData.email} onChange={handleChange} required/>
            </div>

            {/* Input field for department */}
            <div className='d-flex mb-4 '>
              <Label htmlFor="department">Department</Label>
              <Input id="department" placeholder="Department..." type="text" name='department' value={formData.department} onChange={handleChange} required/>
            </div>

            {/* Submit button with bottom gradient effect */}
            <button
              className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] "
              type="submit"
            >
              {add ? "Add" : "Update"}
              <BottomGradient />
            </button>

            {/* Divider */}
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </Modal>
    </div>
  );
}
