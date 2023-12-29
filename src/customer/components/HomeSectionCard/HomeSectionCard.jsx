import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://plus.unsplash.com/premium_photo-1674435578145-4ba6ce1dd95c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-grey-900">Nofilter</h3>
        <p className="mt-2 text-sm text-grey-500">
          Men solid pure cotton white
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
