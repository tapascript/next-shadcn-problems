import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useRouter } from "next/navigation"

import { RegistrationForm } from "../forms/registration-form"

export function RegisterDialog({open, setOpen}) {
  const router = useRouter();

  const handleCloseDialog = () => {
    setOpen(false);
    router.refresh();
  }
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>
            Register to get tapaScript content for FREE!
          </DialogDescription>
        </DialogHeader>
        <RegistrationForm onSave={handleCloseDialog}/>
      </DialogContent>
    </Dialog>
  )
}
