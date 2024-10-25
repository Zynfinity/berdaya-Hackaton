import { create } from "zustand";

export const useZustand = create((set, get) => {
  return {
    user: null
  }
})