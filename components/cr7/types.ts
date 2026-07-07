import type { Club, Moment, Milestone } from "@/data/site";

export type ModalState =
  | { kind: "club"; item: Club }
  | { kind: "moment"; item: Moment }
  | { kind: "milestone"; item: Milestone }
  | null;

export type OpenModal = (modal: Exclude<ModalState, null>) => void;
