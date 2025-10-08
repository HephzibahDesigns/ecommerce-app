import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind class name combiner
export function cn(...inputs: unknown[]) {
  return twMerge(clsx(inputs));
}
