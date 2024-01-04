// console.log('contact')
// module.exports = {
//   HTML: function(){}
// LIST : function(){}
//}
module.exports = {

  list: function (queryData_id) {//queryData_id
    let main_page = '<a href="/">main page</a><br>';
    // let change_page = ''
    let list_page = [];
    //각 페이지 생성하는 코드
    for (let i = 0; i < 4; i++) {
      list_page.push(`<a href="/?id=${i + 1}_page">${i + 1} page</a><br>`);
      if (queryData_id === `${i + 1}_page`) {
        list_page[i] = main_page;
      }
    }
    let list_pageString = list_page.join(''); //문자열로 처리하지 않으면 undefined가 된다.
    //해당 페이지(queryData.id)가 선택될 경우 해당 자리는 main_page로 작성
    // console.log(list_page)

    // let main_tag = '<a href="/">main page</a>';
    return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${queryData_id}</title>
        </head>
        <body>
        <h1>This is ${queryData_id}</h1>
        ${list_pageString}
        </body>
      </html>
      `
  }

}