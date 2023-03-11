import { loadStripe } from "@stripe/stripe-js";

const public_key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY

export const stripePromise = loadStripe(public_key)
