import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFoundLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const notFoundStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 8rem)'
  }
  return (
    <div style={notFoundStyles}>{children}</div>
  );
}