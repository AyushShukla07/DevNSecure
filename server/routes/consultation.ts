import { RequestHandler } from "express";
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
  const cleaned = whatsapp.replace(/\D/g, '');
  return cleaned.length >= 7;
};

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export const handleConsultation: RequestHandler = async (req, res) => {
  const { email, whatsapp, projectContext, source } = req.body as ConsultationRequest;

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
      to: "devnsecure.dev@gmail.com",
      subject: "New Consultation Request",
      text: emailContent,
      replyTo: email,
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    res.json({
      success: true,
      message: "Consultation request submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit consultation request. Please try again later.",
    });
  }
};
