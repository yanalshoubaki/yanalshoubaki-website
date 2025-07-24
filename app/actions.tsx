"use server";
import { Resend } from "resend";
import { EmailTemplate } from "./components/email-template";
const resend = new Resend("re_ct4foGKk_3fwVG9LDaNeaCK8Xm3xtF5Jd");

export async function submitContactForm(formData: FormData) {
  const name = String(formData.get("name"));
  const email = String(formData.get("email"));
  const message = String(formData.get("message"));
  const subject =
    String(formData.get("subject")) || "New Contact Form Submission";

  const emailResponse = await resend.emails.send({
    from: `${name} <me@yanalshoubaki.com>`,
    to: ["yanalshoubaki233@gmail.com", email],
    subject,
    tags: [
      {
        name: "category",
        value: "confirm_email",
      },
    ],
    react: (
      <EmailTemplate
        name={name as string}
        email={email as string}
        message={message as string}
        subject={subject as string}
      />
    ),
  });
  return emailResponse;
}
