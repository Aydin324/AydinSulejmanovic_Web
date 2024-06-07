import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // No errors, open confirmation dialog
      setDialogOpen(true);
    } else {
      // Errors found, update state to display errors
      setErrors(errors);
    }
  };

  const handleConfirmSubmit = () => {
    // Close confirmation dialog
    setDialogOpen(false);
    // Display success message
    setSuccessMessage("Form submitted successfully!");
    // Clear form data
    setFormData({ name: "", email: "", message: "" });
    // Clear errors
    setErrors({});
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email address";
    }
    if (!data.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Container>
      <Typography variant="h3">Want to write to us?</Typography>
      {successMessage && (
        <Typography variant="body1" color="green">
          {successMessage}
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
          margin="normal"
          variant="outlined"
          sx={successMessage ? { borderColor: "green" } : {}}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          margin="normal"
          variant="outlined"
          sx={successMessage ? { borderColor: "green" } : {}}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          error={!!errors.message}
          helperText={errors.message}
          fullWidth
          margin="normal"
          variant="outlined"
          sx={successMessage ? { borderColor: "green" } : {}}
        />
        <Button type="submit" variant="outlined" color="primary">
          Submit
        </Button>
      </form>
      <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>Are you sure you want to submit the form?</DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmSubmit} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ContactForm;
