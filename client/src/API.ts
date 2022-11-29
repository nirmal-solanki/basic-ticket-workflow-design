import axios, { AxiosResponse } from 'axios';

const baseUrl: string = 'http://localhost:4000';

export const getWorkflows = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const workflows: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + '/workflows'
    )
    return workflows
  } catch (error) {
    throw new Error(error)
  }
}

export const getTickets = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const tickets: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + '/tickets'
    )
    return tickets
  } catch (error) {
    throw new Error(error)
  }
}

export const getTicket = async (id:string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const tickets: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + '/ticket/' + id
    )
    return tickets
  } catch (error) {
    throw new Error(error)
  }
}

export const addTicket = async (
  formData: ITicket
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const ticket: Omit<ITicket, '_id'> = {
      name: formData.name,
      status: null,
    }
    const saveTicket: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + '/add-ticket',
      ticket
    )
    return saveTicket
  } catch (error) {
    throw new Error(error)
  }
}

export const updateTicket = async (
  ticket: ITicket
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const payload = ticket as Pick<ITicket, '_id' | 'status'>;
    const updatedTicket: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-ticket/${payload._id}`,
      {status: payload.status}
    )
    return updatedTicket
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteTicket = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTicket: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-ticket/${_id}`
    )
    return deletedTicket
  } catch (error) {
    throw new Error(error)
  }
}
