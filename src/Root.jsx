import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { PictureContextProvider } from "./context/PicutreContext.jsx";

export default function Root() {
  return (
    <>
      <Header />
      <PictureContextProvider>
        <Outlet />
      </PictureContextProvider>
      {/* footer 컴포넌트 */}
    </>
  );
}
