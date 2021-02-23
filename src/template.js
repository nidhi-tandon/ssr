export default function template(title, content = "") {
  let scripts = ''; // Dynamically ship scripts based on render type
  if (content) {
    scripts = `<script src="../assets/bundle.js"></script>`
  } else {
    scripts = ` <script src="../assets/client.js"> </script> `
  }
  return `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link rel="stylesheet" href="assets/style.css">
              </head>
              <body>
                <div class="content">
                   <div id="root" class="wrap-inner">
                      ${content}
                   </div>
                </div>
                  ${scripts}
              </body>
              `;
}
