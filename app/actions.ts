"use server";
import { Resend } from "resend";
import { emailTemplate } from "./components/email-template";
const resend = new Resend("re_ct4foGKk_3fwVG9LDaNeaCK8Xm3xtF5Jd");

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const subject = formData.get("subject");

  // Here you would typically send an email or save to a database
  const test = await resend.emails.send({
    from: `${name} <me@yanalshoubaki.com>`,
    to: ["yanalshoubaki233@gmail.com"],
    subject: "hello world",
    html: emailTemplate({
      name: name as string,
      email: email as string,
      message: message as string,
      subject: subject as string,
    }),
  });
  console.log(test, "test");
  return {
    message: "Thanks for your message! I'll get back to you soon.",
  };
}
