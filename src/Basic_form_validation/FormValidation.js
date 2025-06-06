import React, { useState } from 'react';

function FormValidation() {
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

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const isValidPassword = (password) => {
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;

    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };

  const isValidAge = (age) => {
    const parsedAge = parseInt(age);
    return parsedAge >= 18 && parsedAge <= 100;
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase, and one lowercase letter";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (!isValidAge(formData.age)) {
      newErrors.age = "Age must be between 18 and 100";
    }

    if (!formData.gender) newErrors.gender = "Gender is required";

    if (formData.interests.length === 0) {
      newErrors.interests = "Select at least one interest";
    }

    if (!formData.birthday) {
      newErrors.birthday = "Date of birth is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedInterests = checked
      ? [...formData.interests, name]
      : formData.interests.filter((interest) => interest !== name);
    setFormData({
      ...formData,
      interests: updatedInterests,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Form submitted", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="Enter your first name"
            onChange={handleChange}
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Enter your last name"
            onChange={handleChange}
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div>
          <label>Phone No.:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="Enter your phone number"
            onChange={handleChange}
          />
          {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Confirm your password"
            onChange={handleChange}
          />
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            placeholder="Enter your age"
            onChange={handleChange}
          />
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
            <input
              type="checkbox"
              name="coding"
              checked={formData.interests.includes("coding")}
              onChange={handleCheckboxChange}
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              name="sports"
              checked={formData.interests.includes("sports")}
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
          {errors.interests && <div className="error">{errors.interests}</div>}
        </div>

        <div>
          <label>Birthday:</label>
          <input
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
          />
          {errors.birthday && <div className="error">{errors.birthday}</div>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
