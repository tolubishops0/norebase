interface PaginationType {
  handlePrev: () => void;
  handleNext: () => void;
  page: number;
}
export default function Pagination({
  handlePrev,
  handleNext,
  page,
}: PaginationType) {
  return (
    <div className="flex justify-between items-center px-[0.5rem] mt-2">
      {page > 1 && (
        <button
          className="font-bold text-base flex items-center"
          onClick={handlePrev}>
          &#8592; Prev
        </button>
      )}
      <button
        className="font-bold text-base flex items-center ml-auto"
        onClick={handleNext}>
        Next &#8594;
      </button>
    </div>
  );
}
