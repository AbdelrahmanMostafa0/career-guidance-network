import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const PopOver = ({ openBtn, children }) => {
  return (
    <Popover>
      <PopoverTrigger>{openBtn}</PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};
export default PopOver;
