import * as Yup from "yup";
export const contactUsSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    subject: Yup.string().required("Please select an inquiry"),
    message: Yup.string().required("Message is required"),
  });
  