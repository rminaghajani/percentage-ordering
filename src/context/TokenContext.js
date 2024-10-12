import { createContext, useEffect, useContext } from "react";
import { useState } from "react";

export const TokenContext = createContext(null);
export const TokenSetFunctionContext = createContext(null);

export function useTokenContext() {
  const token = useContext(TokenContext);
  return { token };
}

export function useTokenSetFunctionContext() {
  const setToken = useContext(TokenSetFunctionContext);
  return { setToken };
}

export function TokenProvider({ children }) {
  const [token, setToken] = useState(() => {
    const saved = localStorage.getItem("tokenContext");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("tokenContext", JSON.stringify(token));

    return () => {
      localStorage.removeItem("tokenContext");
    };
  }, [token]);

  return (
    <TokenContext.Provider value={token}>
      <TokenSetFunctionContext.Provider value={setToken}>
        {children}
      </TokenSetFunctionContext.Provider>
    </TokenContext.Provider>
  );
}
