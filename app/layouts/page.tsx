import { Header } from "~/components/header";
import { Footer } from "~/components/footer";

type LayoutPageProps = {
  className?: string;
} & React.PropsWithChildren;

export function LayoutPage({ className = "", children }: LayoutPageProps) {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
}
