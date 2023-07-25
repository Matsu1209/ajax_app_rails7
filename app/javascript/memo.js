
const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};



function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    //デフォルトのリクエスト処理を拒否
    e.preventDefault();
    //フォームに入力したデータをformDataに格納
    const formData = new FormData(form);
    //XHRインスタンスを生成し、POSTの通信方式（非同期）で、formDataをjson形式で/posts宛に送信している
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200){
        alert(`Error ${XHR.status}:${XHR.status.Text}`);
        return null
      };
      //リストと入力欄の要素を取得
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      //formTextのvalue属性に投稿したメモの内容が格納される
      console.log(formText.value);
      //postキーに紐づく、情報を取得
      const item = XHR.response.post;
      const html = `
      <div class="post">
        <div class="post-date">
          投稿日時：${item.created_at}
        </div>
        <div class="post-content">
          ${item.content}
        </div>
      </div>`;
      //上記のHTMLを挿入
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      //空欄にする
      formText.value = "";
    };
  });

 };
 window.addEventListener('turbo:load', post);
