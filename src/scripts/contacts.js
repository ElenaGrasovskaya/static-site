import { query, navigate } from './common';

/**
 * Check if email is valid.
 *
 * @param {string} email
 */
const isValidEmail = (email) => /[^@]+@[^.]+\..+/g.test(email);

const data = {
  name: {
    value: '',
    valid: false,
  },
  // This field is not mandatory
  company: {
    value: '',
    valid: false,
  },
  email: {
    value: '',
    valid: false,
  },
  message: {
    value: '',
    valid: false,
  },
};

/** @type {Array<File>} */
const attachedFiles = [];

/** Check if all values from form is valid */
const isDataValid = () =>
  Object.entries(data).every(([name, { valid }]) =>
    name === 'company' ? true : valid,
  );

/**
 * Fill data from inputs and check for data validity.
 *
 * @param {InputEvent} event
 */
const onInput = ({ target: { name, value } }) => {
  data[name] = {
    valid: name === 'email' ? isValidEmail(value) : Boolean(value),
    value,
  };
};

/**
 * Receive files from user.
 *
 * @param {Event} event
 */
const onFileReceive = ({ target: { files } }) => attachedFiles.concat(files);

const form = query('.contact-form');
const nameInput = query('#name-input', form);
const companyInput = query('#company-input', form);
const emailInput = query('#email-input', form);
const messageInput = query('#contact-message-area', form);
const attachmentInput = query('#file-input', form);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (isDataValid()) {
    const url = process.env.PUBLIC_FORM_CONTACT_URL; // TODO: replace env variables plugin
    const formData = new FormData();

    formData.append('quote-name', data.name.value);
    formData.append('quote-company', data.company.value);
    formData.append('quote-email', data.email.value);
    formData.append('quote-message', data.message.value);

    attachedFiles.forEach((file) => formData.append('file[]', file)); // TODO: ask for files handling.

    fetch(url, {
      method: 'POST',
      headers: {},
      body: formData,
    })
      .then(
        ({ ok }) => (ok ? '/thanks.html' : '/error.html'),
        () => '/error.html',
      )
      .then(navigate);
  }
});

[nameInput, companyInput, emailInput, messageInput].forEach((element) =>
  element.addEventListener('input', onInput),
);

attachmentInput.addEventListener('change', onFileReceive);
