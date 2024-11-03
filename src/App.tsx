import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTicketAction } from "./providers/Actions";
import { toast } from "sonner";
import Table from "./table/Table";
import Pagination from "./pagination/Pagination";

function App() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, error } = useQuery({
    queryKey: ["tickets", page],
    queryFn: () => getTicketAction(page, limit),
  });

  if (error) {
    toast.error(error.message);
  }

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 py-[1rem] md:py-0">
      <main
        style={{
          boxShadow: "1px 2px 5px 0px rgba(0,0,0,0.62)",
          WebkitBoxShadow: "1px 2px 5px 0px rgba(0,0,0,0.62)",
          MozBoxShadow: "1px 2px 5px 0px rgba(0,0,0,0.62)",
        }}
        className="bg-white pb-2 md:pb-1 md:py-[1rem] w-[95%] md:w-[42rem] rounded-md border-slate-200 border">
        <Table data={data} />
        <Pagination
          page={page}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </main>
    </div>
  );
}

export default App;
