import React from "react";

export const Loader = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="animate-spin h-16 w-16 rounded-full border-t-white border-4 border-primary "></div>
    </main>
  );
};
