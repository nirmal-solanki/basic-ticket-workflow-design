interface ITicket {
    _id: string
    name: string
    status: any
    createdAt?: string
    updatedAt?: string
}

interface IWorkflow {
    _id: string
    status: string
    orderBy: number
    createdAt?: string
    updatedAt?: string
    disabled?: boolean
}

type TicketProps = {
    ticket: ITicket | any
}

type ApiDataType = {
    message: string
    status: string
    tickets: ITicket[]
    ticket?: ITicket
    workflows: IWorkflow[]
    workflow?: IWorkflow
  }
  