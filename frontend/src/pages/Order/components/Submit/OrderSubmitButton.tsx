import {MyContainerProps} from "../../../../types/help/my-container-props.ts";

type Props = MyContainerProps & { };

export default function OrderSubmitButton({children}: Props) {
    return (
        <>
            <button
                type="submit"
                className="bg-black text-white p-4 w-full rounded font-inter font-bold hover:bg-gray-800"
            >
                {children}
            </button>
            <p className="text-sm text-center text-gray-600 font-inter">
                Натискаючи «Оформити замовлення», я погоджуюсь з Публічним договором
            </p>
        </>
    );
};