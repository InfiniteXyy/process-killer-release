import React from 'react';

export function Section(props: { title: string; children: React.ReactNode }) {
  const { title, children } = props;
  return (
    <section className="mx-auto mt-7 flex w-[600px] max-w-full flex-col items-center rounded-lg bg-gray-50 p-12 pt-4">
      <h3 className="text-md mb-4 font-medium text-gray-700 underline">{title}</h3>
      <div>{children}</div>
    </section>
  );
}
