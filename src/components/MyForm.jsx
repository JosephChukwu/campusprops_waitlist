import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { FiArrowRight } from "react-icons/fi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const scriptUrl = "https://script.google.com/macros/s/AKfycbwZnShRQ4vhYtmmtuM7SR34vy4-Im-juOYI3Z1sZbSKYpSA8wXPxfj8OuesYJ2QBXtzwQ/exec";

const validationSchema = Yup.object({
  Fullname: Yup.string().required("Name is required!"),
  WhatsAppnumber: Yup.string().required("WhatsApp number is Required!"),
  Email: Yup.string().email("Invalid email address").required("Email is required!"),
});

const MyForm = () => {
  const initialValues = {
    Fullname: "",
    WhatsAppnumber: "",
    Email: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        //removed cors cuz google api was blocking the request based o coos pilicy
        mode: 'no-cors',
      });
  
      toast.success("Thanks for joining our Waitlist!");
    } catch (error) {
        console.log(error.message)
        toast.error('Please check you internet and try again!')
    }
    
      resetForm();
  };

  return (
    <div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
      <Form style={{ width: "300px" }}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="Fullname" style={{ color: "white" }}>
              Your Name
            </label>
            <Field
              type="text"
              id="Fullname"
              name="Fullname"
              style={{
                width: "200%",
                borderRadius: "5px",
                padding: "8px",
                // outline: "none",
                color: "white", 
                background: "transparent", 
                border: "1px solid white",
                fontFamily: '"Reem Kufi", sans-serif !important',
                fontSize: 'clamp(0.6rem, 2.5vw, 1.4rem)',
              }}
            />
            <ErrorMessage
              name="Fullname"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="Whatsappnumber" style={{ color: "white" }}>
              WhatsApp Number
            </label>
            <Field
              type="text"
              id="Whatsappnumber"
              name="WhatsAppnumber"
              style={{
                width: "200%",
                borderRadius: "5px",
                padding: "8px",
                // outline: "none",
                color: "white", 
                background: "transparent", 
                border: "1px solid white",
                fontFamily: '"Reem Kufi", sans-serif !important',
                fontSize: 'clamp(0.6rem, 2.5vw, 1.4rem)',
              }}
            />
            <ErrorMessage
              name="Whatsappnumber"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="email" style={{ color: "white" }}>
              Email
            </label>
            <Field
              type="text"
              id="Email"
              name="Email"
              style={{
                width: "200%",
                borderRadius: "5px",
                padding: "8px",
                // outline: "none",
                color: "white", 
                background: "transparent", 
                border: "1px solid white",
                fontFamily: '"Reem Kufi", sans-serif !important',
                fontSize: 'clamp(0.6rem, 2.5vw, 1.4rem)',
              }}
                />
            <ErrorMessage
              name="Email"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <button
            className="secondary-button"
            type="submit"
            style={{
              width: "200%",
              borderRadius: "5px",
              padding: "10px",
              outline: "none",
            }}
          >
            Join Waitlist <FiArrowRight />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;



// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { FiArrowRight } from "react-icons/fi";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const validationSchema = Yup.object({
//   Fullname: Yup.string().required("Name is required!"),
//   WhatsAppnumber: Yup.string().required("WhatApp number is Required!"),
//   Email: Yup.string()
//   .email("Invalid email address")
//   .required("Email is required!")
// });

// const MyForm = () => {
//   const initialValues = {
//     Fullname: "",
//     WhatsAppnumber: "",
//     Email: "",

//   };

//   const handleSubmit = async (values, { resetForm }) => {const handleSubmit = async (values, { resetForm }) => {
//     console.log('handleSubmit called');
    
//     try {
//       console.log('Before fetch');
      
//       const response = await fetch(
//         // Google Apps Script URL
//         "https://script.google.com/macros/s/AKfycbz8VPp--bK4ic33jegW-CwqnoQcJ1v5gTNnanGDIgjeyzJ5_0tO2FaVYVEZ9oH6eQAC/exec",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//         }
//       );
  
//       console.log('After fetch');
  
//       const data = await response.json();
//       console.log('Response data:', data);
  
//       if (data.success === false) {
//         toast.error(data.message); 
//         return;
//       }
  
//       toast.success('Successfully joined Waitlist!');
//     } catch (error) {
//       console.error('Error:', error.message);
//       toast.error(error.message);
//     }
  
//     console.log('After try-catch');
  
//     resetForm();
//   };
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
        
//       </Formik>
//     </div>
//   );
// };

// export default MyForm;
