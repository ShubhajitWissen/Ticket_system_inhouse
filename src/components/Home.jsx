import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

export default function Home() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function getUsers() {
      const response = await fetch("http://127.0.0.1:8000/api/devs/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: token,
        },
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("alldev", JSON.stringify(data));
    }
    getUsers();
  }, []);
  useEffect(() => {
    async function getUsers() {
      const response = await fetch("http://127.0.0.1:8000/api/users/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: token,
        },
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("allusers", JSON.stringify(data));
    }
    getUsers();
  }, []);
  return (
    <>
      <Header />
      <main
        style={{
          display: "flex",

          width: "100%",

          padding: "20px 0",
        }}
      >
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
}
