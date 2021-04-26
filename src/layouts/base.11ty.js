const header = require('../components/header.11ty');
const footer = require('../components/footer.11ty');

module.exports.render = async function pwa({
  lang = 'en',
  title = '',
  styles,
  content,
  scripts,
  keywords = '',
  description = '',
}) {
  const isContacts = this.page.url.includes('contacts');

  return /* html */ `
  <!DOCTYPE html>
  <html lang="${lang}">
    <head>
      <meta charset="utf-8" />
  
      <title>${title}</title>
  
      <meta name="title" content="${title}" />
      <meta name="description" content="${description}" />
      <meta name="keywords" content="${keywords}" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />
      <meta name="theme-color" content="#02021e" />
  
      <meta name="apple-mobile-web-app-status-bar-style" content="#02021e" />
      <meta name="theme-color" content="#02021e" />
      <meta property="og:title" content="${keywords}" />
      <meta property="og:description" content="${description}" />
      <meta property="og:type" content="website" />
  
      <!-- safari format detection -->
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      <meta name="format-detection" content="date=no" />
   
      <!--  Here styles are inserted. -->
			${(Array.isArray(styles) ? styles : Array.of(styles))
        .filter(Boolean)
        .map((url) => /* html */ `<link rel="stylesheet" href="${url}">`)
        .reduce((text, link) => text + link, '')}
    </head>
    <body>
      <div class="site-body">
        ${await header.call(this, isContacts)}
        ${content}
			  ${await footer.call(this, isContacts)}	
      </div>
      
      <!--  Here scripts are inserted. -->
			${(Array.isArray(scripts) ? scripts : Array.of(scripts))
        .filter(Boolean)
        .map((url) => /* html */ `<script defer src="${url}"></script>`)
        .reduce((text, script) => text + script, '')}
    </body>
  </html>
  `;
};
