import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import SubmissionSuccess from "./SubmissionSuccess";
import { useForm } from "react-hook-form";
import api from "../lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  businessName: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
});

export default function TalkToSpecialistDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [formOpen, setFormOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const payload = {
      Name: values.name,
      Business_Name: values.businessName,
      Email: values.email,
      PhoneNo: values.phoneNumber,
      Status: true,
    };

    try {
      const res = await api.post("/api/admin/posspealist/create", payload);
      console.log("API response:", res.data);
      // close the form dialog and open the success dialog
      setFormOpen(false);
      setSuccessOpen(true);
      form.reset();
    } catch (err: any | Error) {
      console.error("Submission error:", err);
      const errMsg = err?.message;
      form.setError("root", {
        type: "server",
        message: errMsg,
      });
    }
  };

  return (
    <>
      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="grid grid-cols-2 items-center justify-between gap-10">
            {/* Form Section */}
            <div className="flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                Talk to POS Spealist
              </h2>
              <p className="text-gray-600 mb-8">
                We are here for you! How can we help?
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4 w-full"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-900">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name"
                            {...field}
                            className="h-11 px-4"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-900">
                          Business Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your business name"
                            {...field}
                            className="h-11 px-4"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-900">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                            className="h-11 px-4"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-900">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Enter your phone number"
                            {...field}
                            className="h-11 px-4"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {form.formState.errors.root && (
                    <p className="text-red-600 text-sm">
                      {form.formState.errors.root.message}
                    </p>
                  )}
                  <div className="w-full flex flex-col items-center">
                    <Button
                      type="submit"
                      className=" px-8 py-3 bg-gradient-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Contact Expert"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            {/* Map Section */}
            <div className="">
              <div className="relative w-96 h-80">
                <div className="absolute inset-0">
                  {/* Location Card */}
                  <div className="absolute top-6 left-6 bg-white rounded-lg shadow-lg p-4 z-10 max-w-xs">
                    <h3 className="text-pink-600 font-semibold mb-2">
                      We are Here !
                    </h3>
                    <p className="text-sm font-semibold text-gray-900">
                      Main Street, Cairo
                    </p>
                    <p className="text-xs text-gray-600">
                      Riverside Building, County Hall,
                      <br />
                      Cairo SE1 7PB
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Main+Street+Cairo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 text-sm mt-2 hover:underline"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Directions
                    </a>
                  </div>

                  {/* Embedded Map */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5543863242405!2d-0.11957908422950794!3d51.50735297963545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sCounty%20Hall%2C%20London!5e0!3m2!1sen!2suk!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Location Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <SubmissionSuccess
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
      />
    </>
  );
}
