import React, { useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';

export default function Checkout() {
    const mercadopago = useMercadopago.v2({process.env.REACT_APP_MERCADOPUBLIC}, {
        locale: 'en-US'
    });

    useEffect(() => {
        if (mercadopago) {
            mercadopago.checkout({
                preference: {
                    id: 'QUICKPAYNI'
                },
                render: {
                    container: '.cho-container',
                    label: 'Pay',
                }
            })
        }
    }, [mercadopago])

    return (
        <div>
            <div class="cho-container" />
        </div>
    )
}