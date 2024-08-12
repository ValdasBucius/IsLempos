import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import InnerOutside from "../pages/InnerOutside";

export default function Main() {
  return (
    <main className="pt-36">
          <InnerOutside/>
    </main>
  );
}
