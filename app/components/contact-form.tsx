"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { submitContactForm } from "../actions";
import { toast } from "sonner";

export default function ContactForm() {
  const [pending, setPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setPending(true);
    try {
      const response = await submitContactForm(formData);
      if (response.error === null) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <Card className="p-6">
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <Input id="subject" name="subject" type="text" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea id="message" name="message" required />
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  );
}
