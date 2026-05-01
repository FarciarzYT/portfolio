'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function HeroImage({ alt }: { alt: string }) {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className="relative w-77.5 h-92.5 mx-auto sm:ml-auto sm:mr-4 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src="/img/tlusty.webp"
                alt={alt}
                fill
                priority
                loading="eager"
                className={`rounded-3xl object-cover object-top transition-opacity duration-500 ${
                    hovered ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <Image
                src="/img/tlusty-avatar.png"
                alt="Avatar"
                fill
                priority
                className={`rounded-3xl object-cover object-top transition-opacity duration-500 ${
                    hovered ? 'opacity-100' : 'opacity-0'
                }`}
            />
        </div>
    )
}