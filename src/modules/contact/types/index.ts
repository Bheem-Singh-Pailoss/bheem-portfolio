export type ContactStatus =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

