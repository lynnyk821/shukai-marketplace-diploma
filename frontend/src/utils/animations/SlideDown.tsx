import { motion } from "framer-motion";
import {MyContainerProps} from "../../types/my-container-props.ts";

type Props = MyContainerProps & {
    bottom: number,
    duration: number,
}

export default function SlideDown({bottom, duration, children}: Props) {
    return (
        <motion.div
            className={"w-full h-full"}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
                hidden: { y: bottom, opacity: 0 },
                visible: { y: 0, opacity: 1 },
                exit: { y: -bottom, opacity: 1 },
            }}
            transition={{
                duration: duration,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    );
};