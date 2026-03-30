export type View = "menu" | "location" | "timing" | "doctors";

export type Message = {
  id: number;
  type: "bot" | "user";
  text: string;
};

export type Doctor = {
  name: string;
  role: string;
};
