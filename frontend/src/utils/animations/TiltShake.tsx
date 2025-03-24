import {easeInOut, motion} from "framer-motion";
import {MyContainerProps} from "../../types/help/my-container-props.ts";

export default function TiltShake({children}: MyContainerProps) {
    return (
        <motion.div
            whileHover={{
                x: [-2, 2, -2],
                rotate: [-10, 10, -10],
                transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    ease: easeInOut,
                }
            }}
            transition={{
                duration: 0.4,
                ease: easeInOut,
            }}
            animate={{
                x: 0,
                rotate: 0,
            }}
        >
            {children}
        </motion.div>
    );
};