/**
 * Web3Forms utility for modern form handling
 */

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

/**
 * Send contact form data via Web3Forms API
 */
export const sendContactForm = async (formData) => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "New Contact Form Submission",
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        message: formData.message,
      }),
    });

    const result = await response.json();
    return { success: result.success, message: result.message };
  } catch (error) {
    console.error("Web3Forms Error:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Send quote form data via Web3Forms API
 */
export const sendQuoteForm = async (formData) => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Quote Request: ${formData.projectType}`,
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        description: formData.description,
      }),
    });

    const result = await response.json();
    return { success: result.success, message: result.message };
  } catch (error) {
    console.error("Web3Forms Error:", error);
    return { success: false, error: error.message };
  }
};
