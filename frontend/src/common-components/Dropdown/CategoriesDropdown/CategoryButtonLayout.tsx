import {forwardRef} from "react";

const CategoryButtonLayout = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
    ({ children }, ref) => {
        return <div ref={ref} className="h-11">{children}</div>;
    }
);

export default CategoryButtonLayout;