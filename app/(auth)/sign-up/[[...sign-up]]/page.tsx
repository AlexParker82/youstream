import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl p-2 m-2">Sign Up</h1>
      <div>
        <SignUp />;
      </div>
    </div>
  )
}