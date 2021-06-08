import './components/header';

import { query, navigate } from './common';

const isValidEmail = (email: string) => /[^@]+@[^.]+\..+/g.test(email);

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

const attachedFiles: ReadonlyArray<File> = [];

/** Check if all values from form is valid */
const isDataValid = (): boolean =>
  Object.entries(data).every(([name, { valid }]) =>
    name === 'company' ? true : valid,
  );

/** Fill data from inputs and check for data validity. */
const onInput = ({ target }: InputEvent) => {
  data[target['name']] = {
    valid:
      target['name'] === 'email'
        ? isValidEmail(target['value'])
        : Boolean(target['value']),
    value: target['value'],
  };
};

/** Receive files from user. */
const onFileReceive = ({ target }): void =>
  void attachedFiles.concat(target['files']);

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
        ({ ok }) => (ok ? '/thanks' : '/error'),
        () => '/error',
      )
      .then(navigate);
  }
});

[nameInput, companyInput, emailInput, messageInput].forEach((element) =>
  element.addEventListener('input', onInput),
);

attachmentInput.addEventListener('change', onFileReceive);
