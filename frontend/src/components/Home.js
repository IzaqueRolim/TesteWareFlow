import React, { useState } from "react";
import { FileUploadDemo } from "./FileUpload";
import { PeopleAcess } from "./PeopleAcess";

export const Home = () => {
  return (
    <div className="home">
      <FileUploadDemo />
      <PeopleAcess />
    </div>
  );
};
