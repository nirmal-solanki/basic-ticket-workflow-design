import React from "react";
import { Link } from "react-router-dom";

type Props = TicketProps & {
  deleteTicket: (_id: string) => void;
};

const Ticket: React.FC<Props> = ({ ticket, deleteTicket }) => {
  const checkTicket: string = ticket?.status?.status === "closed" ? `line-through` : "";
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTicket}>{ticket.name}</h1>
        <span className={checkTicket}>
          {ticket?.status?.status ? ticket?.status?.status : "open"}
        </span>
      </div>
      <div className="Card--button">
        <Link to={"/tickets/" + ticket._id}>
          <button className="Card--button__done">Change Status</button>
        </Link>
        <button
          onClick={() => deleteTicket(ticket._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Ticket;
