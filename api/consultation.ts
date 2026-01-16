import { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

interface ConsultationRequest {
  email: string;
  whatsapp: string;
  projectContext?: string;
  source?: string;
}

// Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate WhatsApp (at least 7 digits)
const isValidWhatsApp = (whatsapp: string): boolean => {
  const cleaned = whatsapp.replace(/\D/g, "");
  return cleaned.length >= 7;
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  const { email, whatsapp, projectContext, source } =
    req.body as ConsultationRequest;

  // Validate required fields
  if (!email || !whatsapp) {
    return res.status(400).json({
      success: false,
      message: "Email and WhatsApp number are required",
    });
  }

  // Validate email format
  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
  }

  // Validate WhatsApp format
  if (!isValidWhatsApp(whatsapp)) {
    return res.status(400).json({
      success: false,
      message: "Invalid WhatsApp number",
    });
  }

  try {
    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Email content
    const emailContent = `═══════════════════════════════════════════════════════════════
NEW CONSULTATION REQUEST
═══════════════════════════════════════════════════════════════

SUBMISSION SOURCE:
${source || "Website – Start Build Form"}

───────────────────────────────────────────────────────────────

CONTACT INFORMATION:

Email Address:
${email}

WhatsApp Number:
${whatsapp}

Project Context / Message:
${projectContext || "(Not provided)"}

───────────────────────────────────────────────────────────────

This is an automated message from the DevNSecure website consultation form.
Please reply directly to this email to connect with the sender.

═══════════════════════════════════════════════════════════════`;

    // Send email to DevNSecure
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONSULTATION_EMAIL || "devnsecure.dev@gmail.com",
      subject: "New Consultation Request from DevNSecure",
      text: emailContent,
      replyTo: email,
    });

    if (response.error) {
      return res.status(500).json({
        success: false,
        message: "Failed to submit consultation request. Please try again later.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Consultation request submitted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to submit consultation request. Please try again later.",
    });
  }
}
