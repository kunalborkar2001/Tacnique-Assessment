'use client'

import { ThreeDCard } from "@/components/3dCard";
import { useEffect, useState } from "react";
import { addUser, deleteUser, getAllUsers } from '../ApiCall/api';
import Pagination from '@mui/material/Pagination';
import Navbar from "../components/Navbar"


export default function Home() {
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 4; // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getAllUsers();
        setFilteredData(users.data);
        setTotalPages(Math.ceil(users.data.length / itemsPerPage));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchData();
  }, []);



  const handleDelete = async (id) => {
    try {
      let response = await deleteUser(id)

      if (response.status == '200') {
        alert(response.status)
        setFilteredData(filteredData.filter((elem) => elem.id !== id));
      }
    } catch (error) {

    }
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };


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
        
        setFilteredData([addData, ...filteredData]);
      }

    } catch (error) {
      console.log(error);
    }
  }


  // Calculate the index range for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the filteredData array to get the data for the current page
  const currentPageData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      <Navbar handleAdd={handleAdd} />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
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

        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
          size="large"
          color="primary"
          style={{ color: "white" }}
        />
      </main>
    </>
  );
}
