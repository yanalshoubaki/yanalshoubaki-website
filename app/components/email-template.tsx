import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
  Row,
  Column,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
  subject: string;
}

export function EmailTemplate({
  name,
  message,
  email,
  subject,
}: EmailTemplateProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        New message from {name} - {subject}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo */}
          <Section style={header}>
            <Img
              src="https://yanalshoubaki.com/android-chrome-512x512.png"
              width="120"
              height="120"
              alt="Yanal Alshoubaki"
              style={logo}
            />
            <Text style={companyName}>Yanal Alshoubaki</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>New Contact Form Submission</Heading>

            <Text style={text}>
              You have received a new message from your website contact form:
            </Text>

            <Section style={messageBox}>
              <Text style={label}>
                <strong>From:</strong> {name}
              </Text>
              <Text style={label}>
                <strong>Email:</strong> {email}
              </Text>
              <Text style={label}>
                <strong>Subject:</strong> {subject}
              </Text>
              <Text style={label}>
                <strong>Message:</strong>
              </Text>
              <Text style={messageText}>{message}</Text>
            </Section>

            <Hr style={hr} />

            <Text style={footer}>
              This email was sent from the contact form on your website.
            </Text>
          </Section>

          {/* Footer with Social Media */}
          <Section style={socialSection}>
            <Text style={socialTitle}>Connect with me:</Text>
            <Row style={socialRow}>
              <Column style={socialColumn}>
                <Link
                  href="https://github.com/yanalshoubaki"
                  style={socialLink}
                >
                  <Img
                    src="https://yanalshoubaki.com/icons/github.png"
                    width="24"
                    height="24"
                    alt="GitHub"
                    style={socialIcon}
                  />
                </Link>
              </Column>
              <Column style={socialColumn}>
                <Link
                  href="https://linkedin.com/in/yanalshoubaki"
                  style={socialLink}
                >
                  <Img
                    src="https://yanalshoubaki.com/icons/linkedin.png"
                    width="24"
                    height="24"
                    alt="LinkedIn"
                    style={socialIcon}
                  />
                </Link>
              </Column>
              <Column style={socialColumn}>
                <Link href="https://x.com/itsyanal" style={socialLink}>
                  <Img
                    src="https://yanalshoubaki.com/icons/x.png"
                    width="24"
                    height="24"
                    alt="X"
                    style={socialIcon}
                  />
                </Link>
              </Column>
              <Column style={socialColumn}>
                <Link href="mailto:me@yanalshoubaki.com" style={socialLink}>
                  <Text style={emailIcon}>✉️</Text>
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Copyright */}
          <Section style={copyright}>
            <Text style={copyrightText}>
              © {new Date().getFullYear()} Yanal Alshoubaki. All rights
              reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const header = {
  padding: "20px 30px",
  textAlign: "center" as const,
  borderBottom: "1px solid #e6ebf1",
};

const logo = {
  margin: "0 auto",
};

const companyName = {
  fontSize: "24px",
  fontWeight: "600",
  color: "#333333",
  margin: "10px 0 0 0",
};

const content = {
  padding: "30px 30px 40px",
};

const h1 = {
  color: "#333333",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 24px",
  textAlign: "center" as const,
};

const text = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px",
};

const messageBox = {
  backgroundColor: "#f8f9fa",
  border: "1px solid #e6ebf1",
  borderRadius: "6px",
  padding: "20px",
  margin: "20px 0",
};

const label = {
  color: "#333333",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 8px",
};

const messageText = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "8px 0 0 0",
  padding: "12px",
  backgroundColor: "#ffffff",
  border: "1px solid #e6ebf1",
  borderRadius: "4px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
};

const socialSection = {
  padding: "20px 30px",
  textAlign: "center" as const,
  backgroundColor: "#f8f9fa",
  borderTop: "1px solid #e6ebf1",
};

const socialTitle = {
  color: "#333333",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 16px",
};

const socialRow = {
  width: "100%",
};

const socialColumn = {
  width: "25%",
  textAlign: "center" as const,
};

const socialLink = {
  display: "inline-block",
  padding: "8px",
};

const socialIcon = {
  borderRadius: "4px",
};

const emailIcon = {
  fontSize: "24px",
  textDecoration: "none",
};

const copyright = {
  padding: "10px 30px",
  textAlign: "center" as const,
};

const copyrightText = {
  color: "#8898aa",
  fontSize: "12px",
  margin: "0",
};
