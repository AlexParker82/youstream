"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { SearchIcon, X } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

export const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    const url = qs.stringifyUrl({
      url: "/search",
      query: { term: value },
    }, { skipEmptyString: true });

    router.push(url);
  };

  const onClear = () => {
    setValue("");
  }



  return (
    <form onSubmit={onSubmit} className={cn("relative w-full lg:w-[400px] flex items-center", font.className)}>
      <Input type="text" placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)} className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0" />
      {value && (<X className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition" onClick={onClear} />)}
      <Button type="submit" size="sm" variant="secondary" className="bg-slate-600 rounded-l-none">
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </form>
  );
};