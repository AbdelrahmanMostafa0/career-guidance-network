import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

const Modal = ({
  title,
  openBtn,
  trigerStyle,
  children,
  closebtn,
  className,
}) => {
  return (
    <Dialog className={"max-h-[90dvh] overflow-auto"}>
      <DialogTrigger className={trigerStyle}>{openBtn}</DialogTrigger>
      <DialogContent className={`rounded-md max-h-[98dvh] ${className}  `}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default Modal;
