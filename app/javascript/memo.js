function post (){

  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    //デフォルトのリクエスト処理を拒否
    e.preventDefault();
    //
    const formData = new FormData(form);
    //XHRインスタンスを生成し、POSTの通信方式（非同期）で、formDataをjson形式で/posts宛に送信している
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);


  });

 };
 window.addEventListener('turbo:load', post);
