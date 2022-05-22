import React from 'react';

export function Section(props: { title: string; children: React.ReactNode }) {
  const { title, children } = props;
  return (
    <section className="mx-auto mt-7 flex w-[600px] max-w-full flex-col items-center rounded-lg bg-gray-50 p-12 pt-4 dark:bg-neutral-900">
      <h3 className="text-md mb-4 font-medium text-neutral-700 underline dark:text-neutral-300">{title}</h3>
      <div>{children}</div>
    </section>
  );
}
