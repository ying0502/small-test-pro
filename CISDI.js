let init;  //全局变量init
const k=function(m)
{
  init=init+m;
  // console.log('thisis'+m)
  return k
}
k.toString=function()  //重写其toString方法
{
  return init;
}
function CISDI_JS(m)  //调用函数
{
  init=m;
  return k;//返回元对象
}
console.log(CISDI_JS (0).toString())
console.log(CISDI_JS (0)(1).toString())
console.log(CISDI_JS (0)(1)(2).toString())
v = CISDI_JS (0)(1)
console.log(v (2).toString())
