module.exports = {
  html: function (queryData_id, list) {//route
    route = `<a href="#">description</a>` //description 태그가 생성되면 만들 것
    console.log(route)
    if (queryData_id === undefined) {
      queryData_id = 'main page'
      route = ''
    }
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
      ${list}
      <a href="/description">description</a>
      </body>
    </html>
    `
    // <a href="/description">description</a>  이부분 수정 또는 description을 위한 탬플릿을 생성
  },
  //list 형성하기
  list: function (queryData_id) {//queryData_id
    let main_page = '<a href="/">main page</a>';
    // let change_page = ''
    let list_page = [];
    //각 페이지 생성하는 코드
    for (let i = 0; i < 4; i++) {
      list_page.push(`<a href="/?id=page_${i + 1}">page_${i + 1}</a>`);
      if (queryData_id === `page_${i + 1}`) {
        list_page[i] = main_page;
      }
    }
    let list_pageString = list_page.join(''); //문자열로 처리하지 않으면 undefined가 된다.
    //해당 페이지(queryData.id)가 선택될 경우 해당 자리는 main_page로 작성

    //이부분을 template에서 따로 수정
    return list_pageString
  },
  description: function (queryData_id) {
    let main_page = '<a href="/">description</a>';
    // let change_page = ''
    let list_page = [];
    //각 페이지 생성하는 코드
    for (let i = 0; i < 4; i++) {
      list_page.push(`<a href="/description/?id=page_${i + 1}">page_${i + 1}:description</a>`);
      if (queryData_id === `page_${i + 1}`) {
        list_page[i] = main_page;
      }
    }
    let list_pageString = list_page.join(''); //문자열로 처리하지 않으면 undefined가 된다.
    //해당 페이지(queryData.id)가 선택될 경우 해당 자리는 main_page로 작성

    //이부분을 template에서 따로 수정
    return list_pageString
  }

}