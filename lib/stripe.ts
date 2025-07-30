import Stripe from "stripe";

// ! (enforces the type in typescript)
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
