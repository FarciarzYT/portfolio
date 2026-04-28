import React from 'react';

const AboutText = () => {
    return (
        <section className="mx-auto w-full max-w-3xl mt-32">
            <h2 className="text-2xl font-bold tracking-tight text-black">
                O Mnie
            </h2>

            <p className={"mt-6 font-medium leading-relaxed text-black"}>
                Zajmuję się budowaniem rzeczy — od elektroniki na ESP32 i projektowania płytek PCB, po druk 3D i aplikacje webowe. Interesuję się cyberbezpieczeństwem, bo lubię wiedzieć, jak systemy działają od środka
            </p>

            <p className={"mt-6 font-medium leading-relaxed text-black"}>
                W moich projektach używam głównie TypeScripta, Next.js i Tailwind CSS. Poza tym gram w szachy i trenuję kickboxing
            </p>
        </section>
    );
};

export default AboutText;