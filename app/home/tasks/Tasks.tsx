import CautionIcon from "@/app/components/UI/icons/CautionIcon";
import DoneIcon from "@/app/components/UI/icons/DoneIcon";
import OngoingIcon from "@/app/components/UI/icons/OngoingIcon";
import PendingIcon from "@/app/components/UI/icons/PendingIcon";
import PinIcon from "@/app/components/UI/icons/PinIcon";
import UnpinIcon from "@/app/components/UI/icons/UnpinIcon";
import { Task } from "@/app/interfaces/ITask";

interface IProp {
  data: Task;
}
const Tasks: React.FC<IProp> = ({ data }) => {
  return (
    <div className="border-2 rounded-xl my-4">
      <div className="flex justify-between border-b py-1">
        <span className="pl-3 flex items-center">
          {data.pinned ? <UnpinIcon width={6} /> : <PinIcon width={6} />}
          {data.pinned ? (
            <span className="text-xs pl-1">Unpin</span>
          ) : (
            <span className="text-xs pl-1">Pin</span>
          )}
        </span>
        <span className="pr-3 hidden"></span>
      </div>
      <div className="text-center py-4">
        <span className="text-lg">{data.name}</span>
        <br />
        <span className="text-xs">{data.date}</span>
      </div>
      <div className="flex justify-between border-t py-1">
        <span className="pl-3">
          {data.category === 3 ? (
            <DoneIcon width={6} />
          ) : data.category === 0 ? (
            <PendingIcon width={6} />
          ) : data.category === 1 ? (
            <OngoingIcon width={6} />
          ) : data.category === 2 ? (
            <CautionIcon width={6} />
          ) : null}
        </span>
        <span className="pr-3">that</span>
      </div>
    </div>
  );
};

export default Tasks;
