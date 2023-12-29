import StatusBar from "@/UI/StatusBar";
import React from "react";

const EditorLayout = ({
  children,
  contributors,
  explorer,
}: {
  children: React.ReactNode;
  contributors: React.ReactNode;
  explorer: React.ReactNode;
}) => {
  return (
    <main className="w-screen h-screen">
      <div className="flex h-[calc(100vh-25px)] w-full">
        <section className=" w-[250px]">{explorer}</section>
        <div className="w-[calc(100%-300px)]">{children}</div>
        <section className=" w-[50px]">{contributors}</section>
      </div>
      <StatusBar />
    </main>
  );
};

export default EditorLayout;
