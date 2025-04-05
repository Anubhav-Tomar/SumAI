import Stripe from "stripe";
import { getDbConnection } from "./db";

export async function handleSuscriptionDeleted({ subscriptionId, stripe }: {
    subscriptionId: string;
    stripe: Stripe;
}) {
    try{
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const sql = await getDbConnection();

        await sql`UPDATE users SET status = 'cancelled' WHERE customer_id=${subscription.customer}`
    } catch(error) {
        console.error('Error handling suscription deleted', error);
        throw error;
    }
}

export async function handleCheckoutSessionCompleted({ session, stripe }: {
    session: Stripe.Checkout.Session;
    stripe: Stripe;
}) {
    const customerId = session.customer as string;
    const customer = await stripe.customers.retrieve(customerId);
    console.log('Customer data:', customer);
    console.log('Session data:', session);
    const priceId = session.line_items?.data[0]?.price?.id;
    console.log('Price ID:', priceId);


    if ('email' in customer && priceId) {
        const { email, name } = customer;
        const sql = await getDbConnection();
        if (!sql) {
            console.error("Failed to get DB connection.");
            return;
        }

        await createOrUpdateUser({
            sql,
            email: email as string,
            fullName: name as string,
            customerId,
            priceId: priceId as string,
            status: 'active'
        });

        await createPayment({
            sql,
            session,
            priceID: priceId as string,
            userEmail: email as string
        });
    }
}

async function createOrUpdateUser({
  sql,
  email,
  fullName,
  customerId,
  priceId,
  status,
}: {
  sql: any;
  email: string;
  fullName: string;
  customerId: string;
  priceId: string;
  status: string;
}) {
  try {
    const user = await sql`SELECT * FROM users WHERE email = ${email}`;
    if (user.length === 0) {
      await sql`INSERT INTO users (email, full_name, customer_id, price_id, status) VALUES (${email}, ${fullName}, ${customerId}, ${priceId}, ${status})`;
      console.log(`SQL query: INSERT INTO users (email, full_name, customer_id, price_id, status) 
        VALUES (${email}, ${fullName}, ${customerId}, ${priceId}, ${status})`);

    }
  } catch (error) {
    console.error('Error creating or updating user', error);
  }
}

async function createPayment({
    sql,
    session,
    priceID,
    userEmail,
  }: {
    sql: any;
    session: Stripe.Checkout.Session;
    priceID: string;
    userEmail: string;
  }) {
    try {
      const { amount_total, id, status } = session;
    //   const amount = amount_total / 100;
      await sql`INSERT INTO payments (amount, status, stripe_payment_id, price_id, user_email) VALUES (${amount_total}, ${status}, ${id}, ${priceID}, ${userEmail})`;
    } catch (error) {
      console.error('Error creating payment', error);
    }
  }