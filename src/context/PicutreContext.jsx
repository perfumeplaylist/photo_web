import { createContext, useReducer } from "react";
import frameReducer from "../reducer/frame-reducer";
import pictureReducer from "../reducer/picture-reducer";

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
  const [picture, pictureDispatch] = useReducer(pictureReducer, []);
  const [frame, frameDispatch] = useReducer(frameReducer, initialsPicture);

  return (
    <PictureContext.Provider
      value={{ picture, frame, frameDispatch, pictureDispatch }}
    >
      {children}
    </PictureContext.Provider>
  );
}
