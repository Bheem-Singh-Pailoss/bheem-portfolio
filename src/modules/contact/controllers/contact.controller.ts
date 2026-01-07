"use client";

import { useState } from "react";
import { ContactFormData, ContactStatus } from "../types";
import { IContactController } from "../interfaces";
import { ContactService } from "../services";

export class ContactController implements IContactController {
  private service: ContactService;
  private _formData: ContactFormData;
  private _status: ContactStatus;
  private setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
  private setStatus: React.Dispatch<React.SetStateAction<ContactStatus>>;

  constructor(
    formData: ContactFormData,
    setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>,
    status: ContactStatus,
    setStatus: React.Dispatch<React.SetStateAction<ContactStatus>>
  ) {
    this.service = new ContactService();
    this._formData = formData;
    this._status = status;
    this.setFormData = setFormData;
    this.setStatus = setStatus;
  }

  get formData(): ContactFormData {
    return this._formData;
  }

  get status(): ContactStatus {
    return this._status;
  }

  handleInputChange(field: keyof ContactFormData, value: string): void {
    this.setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    this.setStatus({ type: "loading" });

    try {
      // Get current form data from state setter callback
      let currentFormData: ContactFormData = { name: "", email: "", message: "" };
      this.setFormData((prev) => {
        currentFormData = prev;
        return prev;
      });
      
      await this.service.sendMessage(currentFormData);
      this.setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you.",
      });
      this.resetForm();
    } catch (error) {
      this.setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message. Please try again.",
      });
    }
  }

  resetForm(): void {
    this.setFormData({ name: "", email: "", message: "" });
  }
}

// Hook-based controller for React
export function useContactController() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<ContactStatus>({ type: "idle" });

  const service = new ContactService();

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "loading" });

    try {
      await service.sendMessage(formData);
      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message. Please try again.",
      });
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return {
    formData,
    status,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
}

