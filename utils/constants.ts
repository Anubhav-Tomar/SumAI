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
        paymentLink: isDev ? 'https://buy.stripe.com/test_28o3d0ed18Wz0DKaEE' : 'https://buy.stripe.com/test_28o3d0ed18Wz0DKaEE',
        priceId: isDev ? 'price_1R9LRiQLvLmb8BxI9UcOCDs8' : 'price_1R9LRiQLvLmb8BxI9UcOCDs8',
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
        paymentLink: isDev ? 'https://buy.stripe.com/test_cN29Bo9WLc8L9agbIJ' : 'https://buy.stripe.com/test_cN29Bo9WLc8L9agbIJ',
        priceId: isDev ? 'price_1R9LRiQLvLmb8BxIpn0DK9K8' : 'price_1R9LRiQLvLmb8BxIpn0DK9K8',
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