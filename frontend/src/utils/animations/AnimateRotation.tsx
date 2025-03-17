import {MyContainerProps} from "../../types/common/my-container-props.ts";
import {easeInOut, motion} from "framer-motion";

type Props = MyContainerProps & {
    degree: number,
    isActive: boolean,
    className?: string,
};

export default function AnimateRotation({className, isActive, degree, children}: Props) {
    return (
        <motion.div
            className={className}
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