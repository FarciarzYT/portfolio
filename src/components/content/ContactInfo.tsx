import React from 'react';

const ContactInfo = () => {
    return (
        <section className={"mx-auto w-full max-w-3xl mt-16"}>
            <h2 className={"text-2xl font-bold tracking-tight text-black"}>
                Informacje Kontaktowe
            </h2>
            <ol className={"mt-6 font-medium leading-relaxed text-black"}>
                <ul className={"select-none mt-2"}>tel. <span className={"select-text"}>+48 576 715 143</span></ul>
                <ul className={"select-none mt-2"}>email: <span className={"select-text"} >tomek.tlustyxd@gmail.com</span></ul>
                <ul></ul>
            </ol>

        </section>
    );
};

export default ContactInfo;