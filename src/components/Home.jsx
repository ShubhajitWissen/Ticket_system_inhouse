import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <main
        style={{
          marginTop: "80px",
          display: "flex",
          alignItems: "start",

          padding: "20px 0",
        }}
      >
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
}
