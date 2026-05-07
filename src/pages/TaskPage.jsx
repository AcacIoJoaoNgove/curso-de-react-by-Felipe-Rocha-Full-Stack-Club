import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navegate = useNavigate();

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] sapace-y-4 ">
        <div className="flex justify-center relative mb-6">
          <button onClick={() => navegate(-1)} className="text-slate-100 absolute left-0">
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className=" text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
