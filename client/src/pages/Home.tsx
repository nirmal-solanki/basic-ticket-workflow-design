import React, { useEffect, useState } from "react";
import TicketItem from "../components/TicketItem";
import AddTicket from "../components/AddTicket";
import { getTickets, addTicket, deleteTicket } from "../API";

const HomePage: React.FC = () => {
  const [tickets, setTickets] = useState<ITicket[]>([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = (): void => {
    getTickets()
      .then(({ data: { tickets } }: ITicket[] | any) => setTickets(tickets))
      .catch((err: Error) => console.log(err));
  };

  const handleSaveTicket = (e: React.FormEvent, formData: ITicket): void => {
    e.preventDefault();
    addTicket(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Ticket not saved");
        }
        setTickets(data.tickets);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteTicket = (_id: string): void => {
    deleteTicket(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Ticket not deleted");
        }
        setTickets(data.tickets);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="HomePage">
      <h1>Tickets</h1>
      <AddTicket saveTicket={handleSaveTicket} />
      {tickets.map((ticket: ITicket) => (
        <TicketItem
          key={ticket._id}
          deleteTicket={handleDeleteTicket}
          ticket={ticket}
        />
      ))}
    </main>
  );
};

export default HomePage;
