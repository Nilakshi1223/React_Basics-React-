import React, { useState } from 'react';
import * as yup from 'yup';

function FormValidationWithYup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthday: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    phoneNumber: yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    password: yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must include a special character")
      .matches(/[0-9]/, "Must include a number")
      .matches(/[A-Z]/, "Must include an uppercase letter")
      .matches(/[a-z]/, "Must include a lowercase letter"),
    confirmPassword: yup.string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Passwords do not match"),
    age: yup.number()
      .required("Age is required")
      .min(18, "Minimum age is 18")
      .max(100, "Maximum age is 100"),
    gender: yup.string().required("Gender is required"),
    interests: yup.array().min(1, "Select at least one interest"),
    birthday: yup.string().required("Date of birth is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedInterests = checked
      ? [...formData.interests, name]
      : formData.interests.filter(i => i !== name);

    setFormData(prev => ({ ...prev, interests: updatedInterests }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      console.log("Form submitted successfully:", formData);
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach(err => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
      console.log("Validation failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        {/* ... All input fields from your original form ... */}
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>

        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>

        <div>
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div>
          <label>Phone No.:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
        </div>

        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        </div>

        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <div className="error">{errors.age}</div>}
        </div>

        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <div className="error">{errors.gender}</div>}
        </div>

        <div>
          <label>Interests:</label>
          <label>
            <input type="checkbox" name="coding" checked={formData.interests.includes("coding")} onChange={handleCheckboxChange} />
            Coding
          </label>
          <label>
            <input type="checkbox" name="sports" checked={formData.interests.includes("sports")} onChange={handleCheckboxChange} />
            Sports
          </label>
          {errors.interests && <div className="error">{errors.interests}</div>}
        </div>

        <div>
          <label>Birthday:</label>
          <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
          {errors.birthday && <div className="error">{errors.birthday}</div>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidationWithYup;
