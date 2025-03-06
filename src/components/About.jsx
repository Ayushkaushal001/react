import React, { useContext } from "react";
import NoteContext from "./context/noteContext";  // Ensure correct path

const About = () => {
  const a = useContext(NoteContext);
  return (
    <>
      <h1>hi myself {a.note.name}</h1>  {/* Ensure safe access */}
      <h1>hihihihi</h1>
    </>
  );
};

export default About;
