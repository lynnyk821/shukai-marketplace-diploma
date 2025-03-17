import {AnimatePresence, motion} from "framer-motion";
import {MyContainerProps} from "../../types/common/my-container-props.ts";

type Props = MyContainerProps & {
    bottom: number,
    duration: number,
    opacity: number,
    isOpen?: boolean,
}

export default function SlideDown({bottom, duration, children, opacity, isOpen}: Props) {
    return (
        <AnimatePresence>
            {isOpen ? (
                <motion.div
                    initial={{ y: bottom, opacity: opacity }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: bottom, opacity: opacity }}
                    transition={{
                        duration: duration,
                        ease: "easeInOut"
                    }}
                >
                    {children}
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

/**/