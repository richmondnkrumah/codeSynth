import StatusBar from "@/components/ui/StatusBar";
import React from "react";

const EditorLayout = ({
  children,
  explorer,
}: {
  children: React.ReactNode;
  explorer: React.ReactNode;
}) => {

  //TODO : add a floating button for the preview site option at the right hand side of the editor
  return (
    <main className="w-screen h-screen relative">
      <div className="flex h-[calc(100vh-25px)] w-full">
        <section className="w-fit">{explorer}</section>
        <div className="w-full overflow-hidden">{children}</div>
      </div>
      <StatusBar />
    </main>
  );
};

export default EditorLayout;
