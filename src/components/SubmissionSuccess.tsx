import React from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";

export default function SubmissionSuccess({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl rounded-2xl p-10 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-36 h-36 rounded-full bg-green-50 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 text-green-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm-1.2 17.1l-4.8-4.9 1.7-1.7 3.1 3.2 6.7-6.9 1.7 1.7-8.4 8.6z" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-green-600">Good Job !</h2>

          <p className="text-sm text-gray-700 max-w-md">
            Our Team will Contact you and Assist you for the Queries or The
            Onboarding Process
          </p>

          <div className="w-full">
            <Button onClick={onClose} className="mx-auto mt-4 px-8 py-3 bg-green-500">
              Back to Website
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
