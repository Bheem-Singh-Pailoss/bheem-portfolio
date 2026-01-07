import { ContactFormData, ContactStatus } from "../types";

export interface IContactService {
  sendMessage(data: ContactFormData): Promise<void>;
}

export interface IContactController {
  formData: ContactFormData;
  status: ContactStatus;
  handleInputChange(field: keyof ContactFormData, value: string): void;
  handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void>;
  resetForm(): void;
}

