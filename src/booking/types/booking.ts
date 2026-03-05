export type Steps = "DATETIME" | "VALIDATING" | "DETAILS" | "SUCCESS";

export type BookingFormData = {
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
};
