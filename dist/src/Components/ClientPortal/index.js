"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const ClientPortal = ({ children, selector }) => {
    const ref = react_1.useRef(null);
    const [mounted, setMounted] = react_1.useState(false);
    react_1.useEffect(() => {
        ref.current = document.querySelector(selector);
        setMounted(true);
        if (ref.current !== null) {
            ref.current.classList.add("blocked");
        }
        else {
            throw new DOMException("Element not found");
        }
    }, [selector]);
    // @ts-ignore
    return mounted ? react_dom_1.createPortal(children, ref.current) : null;
};
exports.default = ClientPortal;
