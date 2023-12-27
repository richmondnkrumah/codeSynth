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
    <main className="flex w-screen h-[calc(100vh-25px)]">
        <section className=" w-[250px]">{explorer}</section>
        <div className="w-[calc(100%-300px)]">{children}</div>
        <section className=" w-[50px]">{contributors}</section>
      <StatusBar />
    </main>
  );
};

export default EditorLayout;
