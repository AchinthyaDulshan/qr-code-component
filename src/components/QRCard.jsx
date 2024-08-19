import React from 'react'
import QRCode from '../assets/images/image-qr-code.png'

const QRCard = () => {
    return (
        <div className="max-w-80 rounded-xl shadow-xl p-5 bg-white font-[18px] text-center">
            <img className='rounded-lg object-cover' src={QRCode} alt="QRcode" />
            <h1 className='font-bold text-SLATE-900 py-4 px-2 text-xl'>Improve your front-end skills by building projects</h1>
            <p className='tracking-tight text-SLATE-500 mb-4'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    )
}

export default QRCard