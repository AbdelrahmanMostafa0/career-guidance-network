import { cn } from "@/lib/utils";

const ExtraDataContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "p-5 bg-white w-full  space-y-2 rounded-lg relative",
        className
      )}
    >
      {children}
    </div>
  );
};
export default ExtraDataContainer;
