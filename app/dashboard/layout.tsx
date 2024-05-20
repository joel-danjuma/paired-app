import clsx from "clsx";
import { DashNavbar } from "./ui/navbar";
import DashSidebar from "./ui/sidebar";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="md:flex md:flex-row w-full h-screen">
      <>
        <aside className="hidden lg:block md:w-fit bg-white">
          <DashSidebar />
        </aside>
        <div className="grow overflow-y-auto h-full bg-white flex-col">
          <main className="">{children}</main>
        </div>
      </>
    </section>
  );
}
