import React from 'react';
import Link from "next/link";

const HackTimeSpend = () => {
    return (
        <section className="mx-auto w-full max-w-3xl mt-32 hidden sm:flex justify-center items-center">
            <Link href="https://heatmap.shymike.dev?id=25343&timezone=Europe%2FWarsaw&rounding=60&labels=true&ranges=75%2C50%2C30&year=current&theme=light&standalone=true"
                  title="Click to view detailed data for each day!"
            >
                <img alt="Hackatime activity heatmap" src="https://heatmap.shymike.dev?id=25343&timezone=Europe%2FWarsaw&rounding=60&labels=true&ranges=75%2C50%2C30&year=current&theme=light"/>
            </Link>
        </section>
    );
};

export default HackTimeSpend;