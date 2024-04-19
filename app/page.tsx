
import { ThreeDCard } from "@/components/3dCard"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid gid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-2">
      <ThreeDCard />
      <ThreeDCard />
      <ThreeDCard />
      <ThreeDCard />
      </div>

    </main>
  );
}
