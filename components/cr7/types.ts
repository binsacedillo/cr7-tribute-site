import type { Club, Moment } from "@/data/site";

export type ModalState =
  | { kind: "club"; item: Club }
  | { kind: "moment"; item: Moment }
  | null;

export type OpenModal = (modal: Exclude<ModalState, null>) => void;
