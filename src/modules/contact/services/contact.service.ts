import { ContactFormData } from "../types";
import { IContactService } from "../interfaces";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export class ContactService implements IContactService {
  async sendMessage(data: ContactFormData): Promise<void> {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error(
        "Email service is not configured. Please set your EmailJS environment variables."
      );
    }

    if (!data.name || !data.email || !data.message) {
      throw new Error("Please fill in all fields.");
    }

    const emailjs = (await import("@emailjs/browser")).default;
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      PUBLIC_KEY
    );
  }
}

