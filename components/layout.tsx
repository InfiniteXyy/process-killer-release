import { useTheme } from 'next-themes';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { setTheme, theme } = useTheme();

  return (
    <div className="text-dark-500 dark:text-light-300 max-w-200 mx-auto w-full p-2 md:p-10">
      <div>{children}</div>
    </div>
  );
}
