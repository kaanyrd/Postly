import { createContext } from "react";
import { useWindowDimensions } from "react-native";

export const ScreenContext = createContext();

export const ScreenContextProvider = ({ children }) => {
  const { width, height } = useWindowDimensions();
  const small = width < 360;
  const medium = width >= 360 && width < 768;
  const big = width >= 768;

  const value = {
    small,
    medium,
    big,
  };

  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
};

export default ScreenContextProvider;
