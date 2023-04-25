import { createContext, useState } from "react";

export const PictureContext = createContext();

const initialsPicture = {
  url: "",
  thema: "",
  frame: "",
  blank: "",
  description: "",
};

export function PictureContextProvider({ children }) {
  const [picture, setPicture] = useState([]);
  const [frame, setFrame] = useState(initialsPicture);

  const addPicture = (data) => {
    setPicture((prev) => {
      return [...prev, data];
    });
  };

  const changeFrame = (data) => {
    const { url, thema, frame, blank, description } = data;

    setFrame((prev) => ({ ...prev, url, thema, frame, blank, description }));
  };

  return (
    <PictureContext.Provider
      value={{ picture, frame, changeFrame, addPicture }}
    >
      {children}
    </PictureContext.Provider>
  );
}
