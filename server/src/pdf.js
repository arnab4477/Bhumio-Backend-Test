import json2html from 'node-json2html';
import * as pdf from 'html-pdf';

/**
 * Function to create HTML for the student's details froma a
 * JavaScript object
 */
const convertToHtml = (name, state, city, major, zip) => {
  const data = { name, city, major, zip, state };

  let html = json2html.transform([data], {
    '<>': 'div',
    style: 'text-align: center;',
    html: [
      { '<>': 'div', text: 'Name: ${name}' },
      { '<>': 'div', text: 'State: ${state}' },
      { '<>': 'div', text: 'City: ${city}' },
      { '<>': 'div', text: 'Major: ${major}' },
      { '<>': 'div', text: 'Zip: ${zip}' },
    ],
  });

  return html;
};

/**
 *
 * Promise based function to generate PDF from an html
 */
const convertToPdf = (name, state, city, major, zip, output) => {
  const html = convertToHtml(name, state, city, major, zip);

  return new Promise((resolve, reject) => {
    pdf
      .create(html, {
        childProcessOptions: {
          env: {
            OPENSSL_CONF: '/dev/null',
          },
        },
        format: 'A4',
      })
      .toFile(output, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
  });
};

export default convertToPdf;
