import {AnimatePresence, motion} from "framer-motion";
import {useLocation} from "react-router-dom";
import {ReactNode} from "react";
import LoadingIndicator from "@components/loading/LoadingIndicator.tsx";

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <LoadingIndicator />
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                style={{
                    width:"100%"
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
