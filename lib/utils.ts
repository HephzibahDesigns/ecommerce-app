// lib/utils.ts

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind class name combiner
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
