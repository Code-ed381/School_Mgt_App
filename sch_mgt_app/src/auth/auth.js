// import { useState, createContext, useContext } from "react";

// const authContext = createContext();

// const useAuth = ()=> {
//     const [authed, setAuthed] = useState(false);

//     return {
//         authed,
//         login() {
//             return new Promise((res)=> {
//                 setAuthed(true);
//                 res()
//             });
//         },
//         logout() {
//             return new Promise((res)=> {
//                 setAuthed(false);
//                 res();
//             });
//         }
//     }
// }

// export function AuthProvider({ children }) {
//     const auth = useAuth();

//     return <authContext.Provider value={auth}>{children}</authContext.Provider>
// }

// export default function AuthConsumer() {
//     return useContext(authContext)
// }

export const isAuthenticated = user => !!user

export const isAllowed = (user, rights) => 
    rights.some(right => user.rights.includes(right));

export const hasRole = (user, roles) => 
roles.some(role => user.roles.includes(role));

