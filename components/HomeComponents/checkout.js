import { loadStripe } from '@stripe/stripe-js';


export async function checkout({lineItems}){

let stripePromise = null

const getStripe = () => {
    if (!stripePromise){
        stripePromise = loadStripe('pk_test_51N3JwXABhiJUkMxIicZ3haxfaEFPjfQMEuBZFazoYZTWZINNjVablmJDvdC3Ihi5zcjGPf0XEEkLV5Cnds2aoj2H00MOk6u16T')
    }
    return stripePromise
}
const stripe = await getStripe()
await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems, 
    successUrl: `${window.location.origin}/payment?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin
})

}