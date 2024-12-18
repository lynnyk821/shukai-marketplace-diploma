import {MyContainerProps} from "../../types/my-container-props.ts";
import {easeInOut, motion} from "framer-motion";

type Props = MyContainerProps & {
    degree: number,
    isActive: boolean,
};

export default function AnimateRotation({isActive, degree, children}: Props) {
    return (
        <motion.div
            transition={{
                duration: 0.3,
                ease: easeInOut,
            }}
            animate={{rotateZ: isActive ? degree : 0}}
        >
            {children}
        </motion.div>
    );
};