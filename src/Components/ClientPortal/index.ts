import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ClientPortalProps } from "./ClientPortal";

const ClientPortal = ({ children, selector }: ClientPortalProps) => {
    const ref = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.querySelector(selector);
        setMounted(true);
        if (ref.current !== null) {
            ref.current.classList.add("blocked");
        } else {
            throw new DOMException("Element not found");
        }
    }, [selector]);

    // @ts-ignore
    return mounted ? createPortal(children, ref.current) : null;
};
export default ClientPortal;
