import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero max-w-3xl w-full sm:max-w-xl  mx-auto mt-48 flex flex-row ">
            <div className={"w-[50%]"}>
                <Image src={"/"} alt={"Selfie Tomasza"} width={100} height={100} />
            </div>
            <div className={"w-[50%]"}>
                <h1 className="text-3xl font-bold tracking-tight text-black">
                    Tomasz Tłusty
                </h1>
                <h2 className="mt-2 text-lg font-medium text-black">
                    Web Developer | Tarnobrzeg 🇵🇱
                </h2>
            </div>
        </section>
    );
};

