import { UserButton } from "@clerk/nextjs";
import CardComp from "@/comps/CardComp";



export default function Home() {
  return (

    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center bg-slate-800">
        <div className="p-2 m-2">
          <h1 className="text-4xl">YouStream</h1>
        </div>
        <div className="p-2 m-2">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="flex h-full">
        <div className="bg-slate-700 w-48 flex justify-center">
          <p>Sidebar</p>
        </div>
        <div className="bg-white text-black w-full">
          <CardComp />

        </div>
      </div>
    </div>
  );
}
