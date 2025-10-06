import nodemailer, { SentMessageInfo } from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { to, subject, text, html } = body;

    if (!to || !subject || (!text && !html)) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_SMTP_HOST,
      port: Number(process.env.BREVO_SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS,
      },
    });

    const info: SentMessageInfo = await transporter.sendMail({
      from: {
        name: process.env.EMAIL_FROM_NAME || "Portfolio Website",
        address: process.env.EMAIL_FROM_ADDRESS || "no-reply@example.com",
      },
      to,
      subject,
      text,
      html,
    });

    return new Response(
      JSON.stringify({ success: true, messageId: info.messageId }),
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
    return new Response(JSON.stringify({ error: "Unknown error occurred" }), {
      status: 500,
    });
  }
}
