'use client'

// Importing necessary dependencies and components
import * as React from 'react';
import { ThreeDCard } from "@/components/3dCard";
import { useEffect, useState } from "react";
import { addUser, deleteUser, getAllUsers } from '../ApiCall/api';
import Pagination from '@mui/material/Pagination';
import Navbar from "../components/Navbar"

// Main component function
export default function Home() {
  // State variables
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 4; // Number of items per page

  // Effect hook to fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getAllUsers();

        if (users.status == '200') {
          setFilteredData(users.data);
          setTotalPages(Math.ceil(users.data.length / itemsPerPage));
        }

      } catch (error) {
        console.error("Error fetching users:", error);
        alert("Fetching Data Failed") // Alert if fetching data fails
      }
    }

    fetchData();
  }, []);

  // Function to handle deletion of a user
  const handleDelete = async (id) => {
    try {
      let response = await deleteUser(id)

      if (response.status == '200') {
        setFilteredData(filteredData.filter((elem) => elem.id !== id)); // Filter out deleted user
      }
    } catch (error) {
      console.log(error);
      alert("Deleting Data Failed"); // Alert if deleting data fails
    }
  };

  // Function to handle page change in pagination
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  // Function to handle addition of a new user
  const handleAdd = async (e) => {
    let randomId;
    // Generate a random ID greater than 20
    randomId = Math.floor(Math.random() * 100) + 21; // Generate a random number between 21 and 100

    let addData = {
      id: randomId,
      name: e.firstName + " " + e.lastName,
      email: e.email,
      company: {
        catchPhrase: e.department
      }
    }

    // Update the filtered data array by adding the new user to the beginning
    try {
      let response = await addUser(addData)

      if (response.status == '201') {
        setFilteredData([addData, ...filteredData]); // Add new user to filtered data array
      }

    } catch (error) {
      console.log(error);
      alert("Adding Data Failed"); // Alert if adding data fails
    }
  }

  // Calculate the index range for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the filteredData array to get the data for the current page
  const currentPageData = filteredData.slice(startIndex, endIndex);

  // Rendering the JSX
  return (
    <>
      {/* Navbar component for adding new user */}
      <Navbar handleAdd={handleAdd} />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
          {/* Rendering ThreeDCard components for each user */}
          {filteredData && currentPageData.map((elem) => (
            <ThreeDCard
              key={elem.id}
              id={elem.id}
              firstName={elem.name.split(' ')[0]}
              lastName={elem.name.split(' ')[1]}
              email={elem.email}
              department={elem.company.catchPhrase}
              removeElem={handleDelete}
            />
          ))}
        </div>

        {/* Pagination component */}
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
          size="large"
          color="primary"
          sx={{
            '& .MuiPaginationItem-page': {
              color: 'white', // Styling pagination numbers to be white
            },
          }}
        />
      </main>
    </>
  );
}
