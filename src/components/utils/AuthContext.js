import React, { useContext } from "react";

const UserContext = React.createContext();

/* const UserProvider = ({ children }) => {
  debugger;
  const [user, setUser] = useState({ name: "", auth: false, roles: ["guest"] });
  const [user, setUser] = useState();

  //console.log(children);

  const login = (name) => {
    setUser({
      name: name,
      auth: true,
      roles: ["guest"],
    });
  };

  const logout = () => {
    setUser({
      name: "",
      auth: false,
      roles: ["guest"],
    });
  };

  return (
    <UserContext.Provider >
      {children}
    </UserContext.Provider>
  );
}; */

export const useGlobalUser = () => {
  return useContext(UserContext);
};

export { UserContext /* UserProvide */ };
