import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const NetflixContext = createContext();

export const NetflixContextProvider = ({ children }) => {
  const [showHeader, setShowHeader] = useState(false);
  const location = useLocation();
  // console.log("konum bilgisi", location);

  useEffect(() => {
    location.pathname === "/welcome"
      ? setShowHeader(false)
      : setShowHeader(true);
  }, [location.pathname]);

  return (
    <NetflixContext.Provider value={{ showHeader }}>
      {children}
    </NetflixContext.Provider>
  );
};
