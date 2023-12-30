import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CloseIcon from "@mui/icons-material/Close";
const Modal = ({ title, openBtn, actionFunction, children, className }) => {
  return (
    <Dialog className={"max-h-[90dvh] overflow-auto"}>
      <DialogTrigger className="p-0 m-0">{openBtn}</DialogTrigger>
      <DialogContent className="rounded-md max-h-[90dvh] ">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default Modal;
