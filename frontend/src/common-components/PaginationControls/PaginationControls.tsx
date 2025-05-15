type Props = {
    currentPage: number;
    totalPage: number;
    onPageChange: (newPage: number) => void;
};

export default function PaginationControls({ currentPage, totalPage, onPageChange }: Props) {
    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPage;

    return (
        <div className="w-full flex text-[#414141] font-inter justify-center gap-4 mt-4">
            <button
                disabled={!hasPrev}
                onClick={() => onPageChange(currentPage - 1)}
                className="px-4 py-2 text-[#414141] bg-[#eee] rounded-lg disabled:opacity-50"
            >
                Назад
            </button>
            <span className="px-4 py-2">
                Сторінка {currentPage} з {totalPage}
            </span>
            <button
                disabled={!hasNext}
                onClick={() => onPageChange(currentPage + 1)}
                className="px-4 py-2  text-[#414141] bg-[#eee] rounded-lg disabled:opacity-50"
            >
                Вперед
            </button>
        </div>
    );
}
