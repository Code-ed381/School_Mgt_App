import { createContext, useContext, useMemo, useState, useEffect } from "react";

const UserContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {

    })
}