import Navbaritem from "./Navbaritem";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <div className="flex bg-amber-300 p-4 mt-6 text-lg gap-5 pl-40 ">
      <Suspense>
        <Navbaritem title="Trending" param="fetchTrending" />
        <Navbaritem title="Top Rated" param="fetchTopRated" />
      </Suspense>
    </div>
  );
}
