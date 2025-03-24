import {MyButtonProps} from "../help/my-button-props.ts";

export type CategoryItemProps = MyButtonProps & {
    img?: string,
    name: string,
    color: string,
};