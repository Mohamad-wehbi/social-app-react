import { toast } from 'sonner';

export const success = (data) => {toast.success(data.message)};
export const error = (error) => {toast.error(error.response.data.message)};