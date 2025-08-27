// import React, { createContext, useState, useEffect } from "react";
// import { auth } from "./firebaseConfig";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         setUser(authUser);
//       } else {
//         setUser(null);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
// };
