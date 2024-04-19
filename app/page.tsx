
import { ThreeDCard } from "@/components/3dCard"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid gid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-2">
      <ThreeDCard id={1} firstName={"Kunal"} lastName={"Borkar"} email={"kunalborkar2001@gmail.com"} department={'Multi-layered client-server neural-net'}/>
      <ThreeDCard id={2} firstName={"Megha"} lastName={"Rawat"} email={"megharawat2000@gmail.com"} department={'Multi-layered client-server neural-net'}/>
      <ThreeDCard id={2} firstName={"Aryan"} lastName={"Borkar"} email={"aryan2002@gmail.com"} department={'Multi-layered client-server neural-net'}/>
      <ThreeDCard id={4} firstName={"Sahil"} lastName={"Borkar"} email={"sahilborkar@gmail.com"} department={'Multi-layered client-server neural-net'}/>
      </div>

    </main>
  );
}
