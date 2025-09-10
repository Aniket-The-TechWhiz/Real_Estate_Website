import Inquiry from "../models/Inquiry.js";
import Property from "../models/Property.js";

// Submit inquiry for a property
export const createInquiry = async (req, res) => {
  try {
    const { name, email, message, property, phoneNumber, city } = req.body;

    // Validate required fields (property is optional now)
    if (!name || !email || !phoneNumber || !city) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const inquiryData = {
      name,
      email,
      phoneNumber,
      city
    };

    if (message)
    {
      inquiryData.message=message;
    }
    // Only add property if it exists
    if (property) {
      inquiryData.property = property;
    }


    const inquiry = new Inquiry(inquiryData);

    await inquiry.save();

    res.status(201).json({ message: "Inquiry submitted successfully", inquiry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all inquiries (for admin/dashboard usage)
export const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().populate("property", "title price location");
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching inquiries", error });
  }
};
