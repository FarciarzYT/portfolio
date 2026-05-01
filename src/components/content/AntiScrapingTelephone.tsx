"use client"
import { useState } from "react"
import Link from "next/link";

export default function AntiScrapingTelephone({ locale }: { locale: string }) {
    const [revealed, setRevealed] = useState(false)

    return revealed ? (
        <Link href="tel:+48576715143" className="text-sm font-medium select-text text-black/60 hover:text-black transition-colors">
            +48 576 715 143
        </Link>
    ) : (
        <button
            onClick={() => setRevealed(true)}
            className="text-sm font-medium text-black/60 hover:text-black transition-colors"
        >
            {locale === 'en' ? 'show phone' : 'pokaż numer telefonu'}
        </button>
    )
}