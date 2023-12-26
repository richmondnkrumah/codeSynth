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
    <main className="w-screen h-screen  justify-between">
      <div className="flex justify-between h-[calc(100%-25px)]">
        <div className="bg-yellow-200">{explorer}</div>
        <div className="h-full w-full">{children}</div>
        <div className="bg-amber-300">{contributors}</div>
      </div>
      <StatusBar />
    </main>
  );
};

export default EditorLayout;
