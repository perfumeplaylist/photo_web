import { createContext, useState } from "react";

export const PictureContext = createContext();

const initialsPicture = {
  url: "",
  thema: "",
  frame: "",
  blank: "",
  description: "",
  width: "",
  height: "",
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
    const { url, thema, frame, blank, description, width, height, vertical } =
      data;
    setFrame((prev) => ({
      ...prev,
      url,
      thema,
      frame,
      blank,
      description,
      width,
      height,
      vertical,
    }));
  };

  return (
    <PictureContext.Provider
      value={{ picture, frame, changeFrame, addPicture }}
    >
      {children}
    </PictureContext.Provider>
  );
}
