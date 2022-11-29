import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTicket, updateTicket } from "../API";
import UpdateTicket from "../components/UpdateTicket";

const UpdateTicketStatusPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [ticket, setTicket] = useState<ITicket>();

  useEffect(() => {
    fetchTicket(id);
  }, [id]);

  const fetchTicket = (id: string): void => {
    getTicket(id)
      .then(({ data: { ticket } }: ITicket | any) => setTicket(ticket))
      .catch((err: Error) => console.log(err));
  };

  const handleUpdateTicket = (e: React.FormEvent, formData: ITicket): void => {
    e.preventDefault();
    formData._id = id;
    updateTicket(formData)
      .then(({ status }) => {
        if (status !== 200) {
          throw new Error("Error! Ticket not saved");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="UpdateTicketStatusPage">
      <h1>
        <span>{ticket?.name}</span>
        <Link to={"/tickets"}>
          <button className="back-button">Back</button>
        </Link>
        </h1>
      <UpdateTicket updateTicket={handleUpdateTicket}  ticket={ticket}/>
    </main>
  );
};

export default UpdateTicketStatusPage;
