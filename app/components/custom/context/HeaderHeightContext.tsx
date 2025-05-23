// components/context/HeaderHeightContext.tsx
import { createContext, useContext, useState, useEffect, useRef } from "react";
import MainHeader from "../MainHeader";
const HeaderHeightContext = createContext<number | null>(null);

export const useHeaderHeight = () => useContext(HeaderHeightContext);

export const HeaderHeightProvider = ({ children }: { children: React.ReactNode }) => {
    const headerRef = useRef<HTMLElement>(null);
    const [height, setHeight] = useState<number | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && headerRef.current) {
            setHeight(headerRef.current.offsetHeight);
        }
    }, []);

    return (
        <HeaderHeightContext.Provider value={height}>
            <MainHeader headerRef={headerRef} />
            {children}
        </HeaderHeightContext.Provider>
    );
};
