import React from 'react';
import { getTranslations } from 'next-intl/server';
import Link from "next/link";

const ContactInfo = async () => {
  const t = await getTranslations('contact');

  return (
    <section className="mx-auto w-full max-w-3xl mt-16 px-4 sm:px-0">
      <h2 className="text-2xl font-bold tracking-tight text-black">
        {t('title')}
      </h2>
      <ol className="mt-6 font-medium leading-relaxed text-black">
        <ul className="select-none mt-2">
          {t('phone')} <Link href={"tel:+48576715143"} target={"_blank"} className="select-text">+48 576 715 143</Link>
        </ul>
        <ul className="select-none mt-2">
          {t('email')} <Link href={"mailto:kontakt@tlusty.dev"} target={"_blank"} className="select-text">kontakt@tlusty.dev</Link>
        </ul>
        <ul></ul>
      </ol>
    </section>
  );
};

export default ContactInfo;
