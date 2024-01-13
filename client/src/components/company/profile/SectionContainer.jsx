import { cn } from "@/lib/utils";

const SectionContainer = ({ children, className }) => {
  return (
    <section
      className={cn(
        "p-5 bg-white w-full  space-y-2 rounded-lg relative",
        className
      )}
    >
      {children}
    </section>
  );
};
export default SectionContainer;
