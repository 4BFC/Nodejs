// console.log('contact')
// module.exports = {
//   HTML: function(){}
// LIST : function(){}
//}
module.exports = {

  list: function () {//queryData_id
    // let main_tag = '<a href="/">main page</a>';

    let list_page = '';
    for (let i = 0; i < 4; i++) {
      list_page += `<a href="/?id = ${i + 1}_page">${i + 1} page</a><br>`;
    }

    console.log(list_page)
    // if (queryData_id) {

    // }
    let main_tag = '<a href="/">main page</a>';
    return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>2nd_page</title>
        </head>
        <body>
        <h1>This is 2nd_page</h1>
        ${main_tag}
        <br>
        ${list_page}
        </body>
      </html>
      `
  }

}