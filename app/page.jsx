'use client'

import { ThreeDCard } from "@/components/3dCard"
import { useEffect, useState } from "react";
import { getAllUsers } from '../ApiCall/api'


export default function Home() {
  const [filteredData, setfilteredData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let users = await getAllUsers()
      setfilteredData(users.data)

    }

    fetchData()
  }, [])

  const handleDelete = (id) => {
    setfilteredData(filteredData.filter((elem) => elem.id !== id));
    console.log({ "id": id });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 gap-2">
        {filteredData && filteredData.map((elem) => (
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
    </main>
  );
}

