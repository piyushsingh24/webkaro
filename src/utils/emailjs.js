import emailjs from 'emailjs-com';

// EmailJS Configuration
// Replace these with your actual EmailJS credentials
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  contactTemplateId: 'YOUR_CONTACT_TEMPLATE_ID', // Replace with your contact form template ID
  quoteTemplateId: 'YOUR_QUOTE_TEMPLATE_ID', // Replace with your quote form template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

// Send contact form
export const sendContactForm = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.contactTemplateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Contact Form Submission',
        message: formData.message,
      },
      EMAILJS_CONFIG.publicKey
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};

// Send quote form
export const sendQuoteForm = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.quoteTemplateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        description: formData.description,
      },
      EMAILJS_CONFIG.publicKey
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};

export default EMAILJS_CONFIG;
