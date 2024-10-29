import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const USER_NAME_KEY = "user-name";

export const useAuth = () => {
  const { isLoggedIn, setIsLoggedIn, userName, setUserName } =
    useContext(AuthContext);

  const login = () => {
    if (!isLoggedIn && userName) {
      setIsLoggedIn(true);
      localStorage.setItem(USER_NAME_KEY, JSON.stringify(userName));
    }
  };

  const logout = () => {
    setIsLoggedIn(!isLoggedIn);
    setUserName("");
    localStorage.removeItem(USER_NAME_KEY);
  };

  // マウント時にローカルストレージからユーザー名を取得
  // ユーザー名が取得できたら、ログイン中として扱う
  useEffect(() => {
    const loginUser = localStorage.getItem(USER_NAME_KEY);
    if (loginUser) {
      setUserName(JSON.parse(loginUser));
      setIsLoggedIn(true);
    }
  }, []);

  return {
    login,
    logout,
    isLoggedIn,
    setIsLoggedIn,
    userName,
    setUserName,
  };
};
