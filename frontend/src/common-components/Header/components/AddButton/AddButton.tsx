type Props = {
    onClick?: () => void;
};

export default function AddButton({onClick}: Props) {

    return (
        <button
            className={
                `px-2.5 centered text-[#414141] font-inter border-[#414141] border-[1px] rounded-lg
                 hover:text-yellow-600 hover:border-yellow-600 duration-200 ease-in-out`
            }
            onClick={onClick}
        >
            Додати товар
        </button>
    );
};