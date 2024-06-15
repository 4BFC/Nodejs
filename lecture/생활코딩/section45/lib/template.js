
module.exports = {
  HTML: function (title, list, body, control) {//list는 받아온 list를 return을 통해서 제작된다.
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list} 
      ${control}
      ${body}
    </body>
    </html>
    `;
  },
  //filelist를 생성하는 코드
  List: function (filelist) {
    let list = '<ul>';
    let i = 0;
    while (i < filelist.length) {
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    };
    list = list + '</ul>';
    return list;
  }
}

