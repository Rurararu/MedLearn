interface ValidationErrors {
    [key: string]: string;
  }
  
  export function validateProfileFields(data: {
    firstName: string;
    lastName: string;
    email: string;
    status: string;
  }): ValidationErrors {
    const errors: ValidationErrors = {};
  
    // First Name validation
    if (!data.firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (data.firstName.trim().length < 2) {
      errors.firstName = 'First name must be at least 2 characters';
    }
  
    // Last Name validation
    if (!data.lastName.trim()) {
      errors.lastName = 'Last name is required';
    } else if (data.lastName.trim().length < 2) {
      errors.lastName = 'Last name must be at least 2 characters';
    }
  
    // Email validation
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
  
    // Status validation
    if (!data.status) {
      errors.status = 'Status is required';
    } else if (!['student', 'teacher', 'researcher'].includes(data.status)) {
      errors.status = 'Please select a valid status';
    }
  
    return errors;
  }