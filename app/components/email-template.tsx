interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
  subject: string;
}

export const emailTemplate = ({
  name,
  message,
  email,
  subject,
}: EmailTemplateProps) =>
  `<div className="container">
    <div className="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div className="content">
      <p>You have received a new message from your website's contact form.</p>

      <div className="field">
        <div className="field-label">Name:</div>
        <div className="field-value">${name}</div>
      </div>

      <div className="field">
        <div className="field-label">Email:</div>
        <div className="field-value">${email}</div>
      </div>

      <div className="field">
        <div className="field-label">Subject:</div>
        <div className="field-value">${subject}</div>
      </div>

      <div className="field">
        <div className="field-label">Message:</div>
        <div className="message-value">${message}</div>
      </div>
    </div>
    <div className="footer">
      <p>
        This is an automated email from your website's contact form. Please do
        not reply directly to this email.
      </p>
      <p>
        © ${new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </div>
  </div>`;
