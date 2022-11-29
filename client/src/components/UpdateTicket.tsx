import React, { useEffect, useState } from "react";
import { getWorkflows } from "../API";

type Props = TicketProps & {
  updateTicket: (e: React.FormEvent, formData: ITicket | any) => void;
};

const UpdateTicket: React.FC<Props> = ({ ticket, updateTicket }) => {
  const [formData, setFormData] = useState<ITicket | any>();
  const [Workflows, setWorkflows] = useState<IWorkflow[]>([]);
  let enableOptions: string[] = [];

  useEffect(() => {
    setFormData({
      status: ticket?.status || "",
    });
    fetchWorkflows();
  }, [ticket]);

  const fetchWorkflows = async (): Promise<void> => {
    try {
      enableOptions = [];
      const res: any = await getWorkflows();
      const workflows: IWorkflow[] = res?.data?.workflows || [];
      workflows.forEach((o: IWorkflow | any, index: number) => {
        if (ticket?.status === o?._id) {
          enableOptions.push(o?._id);
          if (index === workflows.length - 1) {
            enableOptions.push(workflows[0]?._id);
          } else if (index > 0 && index < workflows.length) {
            enableOptions.push(workflows[index - 1]?._id);
            enableOptions.push(workflows[index + 1]?._id);
          } else {
            enableOptions.push(workflows[index + 1]?._id);
          }
        } else if (!ticket?.status && index === 0) {
          enableOptions.push(o?._id);
          enableOptions.push(workflows[index + 1]?._id);
        }
      });
      const modifyedWorkflow = workflows.map((o: IWorkflow | any) => {
        o.disabled = !enableOptions.includes(o._id);
        return o;
      });
      setWorkflows(modifyedWorkflow);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleForm = (e: React.FormEvent<HTMLSelectElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="Form" onSubmit={(e) => updateTicket(e, formData)}>
      <select
        id="status"
        onChange={handleForm}
        className="browser-default custom-select"
        value={formData?.status}
      >
        {Workflows.map((item: any, key) => (
          <option key={key} value={item?._id} disabled={item?.disabled}>
            {item?.status}
          </option>
        ))}
      </select>
      <button disabled={formData === undefined ? true : false}>
        Update Ticket
      </button>
    </form>
  );
};

export default UpdateTicket;
