import { delay } from "motion/react";
import { isDev } from "./helpers";

export const pricingPlans = [
    { 
        name: 'Basic',
        price: 5,
        description: 'Perfect for occasional use',
        items: [
            '5 PDF summaries per month',
            'Standard processing speed',
            'Email support'
        ],
        id: 'basic',
        paymentLink: isDev ? 'https://buy.stripe.com/test_28EaEZ6855fn7keb50cIE00' : 'https://buy.stripe.com/test_28EaEZ6855fn7keb50cIE00',
        priceId: isDev ? 'price_1SQuRPRN9F5eQPn1RvbfoQPn' : 'price_1SQuRPRN9F5eQPn1RvbfoQPn',
    },
    {
        name: 'Pro',
        price: 10,
        description: 'For professionals and teams',
        items: [
            'Unlimited PDF summaries',
            'Priority processing',
            '24/7 priority support',
            'Markdown Export'
        ],
        id: 'pro',
        paymentLink: isDev ? 'https://buy.stripe.com/test_bJefZj3ZX5fn1ZU0qmcIE01' : 'https://buy.stripe.com/test_bJefZj3ZX5fn1ZU0qmcIE01',
        priceId: isDev ? 'price_1SQuRPRN9F5eQPn1DIbZIL82' : 'price_1SQuRPRN9F5eQPn1DIbZIL82',
    },
];


export const containerVariants = {
    hiddden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
}

export const itemVariants = {
    hiddden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 15,
            stiffness: 50,
            duration: 0.8,
        },
    },
}