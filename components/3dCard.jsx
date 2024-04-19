"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import FormModel from './FormModel'
import { patchUser } from "@/ApiCall/api";

// ThreeDCard component function
export function ThreeDCard({ id, firstName, lastName, email, department, removeElem, handleAdd }) {

  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    department: department,
  })

  // Function to handle updating user data
  const handleUpdate = async (updatedFormData) => {
    try {
      let response = await patchUser(updatedFormData, id)

      if (response.status == '200') {
        setFormData(updatedFormData);
      }

    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle deleting user
  const handleDelete = () => {
    removeElem(id)
  }

  // Rendering JSX for ThreeDCard component
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-dark-1 border-white/[0.2]  w-[100vw] sm:w-[30rem] h-auto rounded-xl p-6 border ">

        <CardItem
          translateZ="50"
          className="text-xl font-boldtext-white flex justify-between w-full"
        >
          <p>First Name : {formData.firstName}</p>
          <p className=" px-2 border rounded-full">{id} </p>
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-xl font-boldtext-white"
        >
          Last Name : {formData.lastName}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-md max-w-sm mt-2 text-neutral-300"
        >
          Email : {formData.email}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          Department : {formData.department}
        </CardItem>

        <div className="flex justify-between items-center mt-20">

          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            {/* Render FormModel component for editing user data */}
            <FormModel
              id={id}
              firstName={firstName}
              lastName={lastName}
              email={email}
              department={department}
              onUpdate={handleUpdate}
              add={false}
            />

          </CardItem>

          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl  bg-white text-black  text-xs font-bold"
            onClick={handleDelete}
          >
            Delete
          </CardItem>

        </div>

      </CardBody>

    </CardContainer>
  );
}
