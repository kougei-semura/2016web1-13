var separate_time = function(time){
  var sec = time.getSeconds();
  var min = time.getMinutes();
  var hours = time.getHours();
  var days = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();
  return [sec, min, hour, days, month, year];
}


var now =new Date();
var target = new Date(2020,7.24,0,0,0,0);
var diff = target.getTime() - now.getTime();
var counter = separate_time(diff);
document.getElementById('countdown').textContent =
'東京オリンピックまであと ' +
counter[5] + '年' +
counter[4] + '月' +
counter[3] + '日' +
counter[2] + '時' +
counter[1] + '分' +
counter[0] + '秒';
