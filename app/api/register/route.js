import nodemailer from "nodemailer";

export const POST = async (req) => {
  try {
    const { name, email, phone, program } = await req.json(); // Use `req.json()` instead of `req.body` in App Router

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER, // Your email where leads should go
      subject: "New Self Defense Academy Lead",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Program: ${program}
      `,
    };

    await transporter.sendMail(mailOptions);
    
    return new Response(
      JSON.stringify({ message: "Lead submitted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send lead email." }),
      { status: 500 }
    );
  }
};
