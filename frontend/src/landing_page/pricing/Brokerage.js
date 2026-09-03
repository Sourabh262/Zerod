import React from 'react'

function Brokerage() {
    return ( 
        <div className='container border-top '>
            <div className='row mt-5'>
                <div className='col-8'>
                    <h3 className='text-center' style={{color:"blue"}}>Brokerage calculator</h3>
                    <ul className='text-muted p-3'>
                        <li className='mt-2'>Call & Trade and RMS auto-squareoff: Additional charges of Rs. 50 + GST pre order.</li>
                        <li className='mt-2'>Digital cotract notes will be sent vie e-mail.</li>
                        <li className='mt-2'>Physical copies of contract notes, if required , shall be charged Rs. 20 per contract note. Courier charges apply.</li>
                        <li className='mt-2'>For NRI account (non-PIS), 0.5% or Rs. 100 per executed order for equity (whichever is lower).</li>
                        <li className='mt-2'>For NRI account , 0.5% or Rs. 200 per executed order for equity (Whichever is lower).</li>
                        <li className='mt-2'>If the account is in debit balance , any order placed will be charged Rs. 40 per executed order instead of Rs. 20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4'>
                <h3 className='text-center' style={{color:"blue"}}>List of charges</h3>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;