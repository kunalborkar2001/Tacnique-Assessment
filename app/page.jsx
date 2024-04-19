'use client'

import { ThreeDCard } from "@/components/3dCard"
import { useEffect, useState } from "react";

let mockData = [
  {
    id: 1,
    firstName: "kunal",
    lastName: "borkar",
    email: "kunalborkar2001@gmail.com",
    department: "Multi-layered client-server neural-net"
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    department: "Software Engineering"
  },
  {
    id: 3,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    department: "Data Science"
  },
]

export default function Home() {
  const [filteredData, setfilteredData] = useState(mockData);


  const handleDelete = (id) => {
    setfilteredData(filteredData.filter((elem) => elem.id !== id));
    console.log({ "id": id });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-2">
        {filteredData && filteredData.map((elem) => (
          <ThreeDCard
            key={elem.id} 
            id={elem.id}
            firstName={elem.firstName}
            lastName={elem.lastName}
            email={elem.email}
            department={elem.department}
            removeElem={handleDelete}
          />
        ))}
      </div>
    </main>
  );
}

