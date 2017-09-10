var rpl_usr = "<input type='TEXT' name='key' size='10' maxlength='16' style='width:120;border:solid 1 #cccccc;' value='' class='input' AUTOCOMPLETE='OFF' onfocus='hide_vk(this);'>";
var rpl_psw = "<input type='PASSWORD' onpaste='return false' name='txtClave' maxlength='20' AUTOCOMPLETE='OFF' class='form-control' placeholder='Contrase&ntilde;a' onfocus='show_vk(this); input_size=20;'>";
var _imgTeclado="vk/teclado-virtual3.gif";

var keyboard_map="<map name=\"_336021DFDEA\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:hide_vk(_951A95D8CD3)\" coords=\"218, 6, 238, 26\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'/\')\" coords=\"12, 33, 32, 53\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'*\')\" coords=\"35, 33, 55, 53\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'-\')\" coords=\"58, 33, 78, 53\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'@\')\" coords=\"104, 33, 124, 53\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'$\')\" coords=\"149, 33, 169, 53\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'?\')\" coords=\"218, 33, 238, 53\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'!\')\" coords=\"12, 56, 32, 76\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'_\')\" coords=\"35, 56, 55, 76\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'=\')\" coords=\"58, 56, 78, 76\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'<\')\" coords=\"81, 56, 101, 76\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'>\')\" coords=\"104, 56, 124, 76\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'.\')\" coords=\"127, 56, 148, 76\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\':\')\" coords=\"150, 56, 170, 76\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\',\')\" coords=\"173, 56, 193, 76\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'(\')\" coords=\"196, 56, 216, 76\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\')\')\" coords=\"218, 56, 240, 76\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'1\')\" coords=\"12, 79, 32, 98\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'2\')\" coords=\"35, 79, 55, 98\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'3\')\" coords=\"58, 79, 78, 98\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'4\')\" coords=\"81, 79, 101, 98\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'5\')\" coords=\"104, 79, 124, 98\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'6\')\" coords=\"127, 79, 147, 98\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'7\')\" coords=\"150, 79, 170, 98\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'8\')\" coords=\"173, 79, 193, 98\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'9\')\" coords=\"196, 79, 218, 98\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'0\')\" coords=\"218, 79, 240, 98\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'Q\')\" coords=\"12, 101, 32, 121\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'W\')\" coords=\"35, 101, 55, 121\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'E\')\" coords=\"58, 101, 78, 121\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'R\')\" coords=\"81, 101, 101, 121\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'T\')\" coords=\"104, 101, 124, 121\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'Y\')\" coords=\"127, 101, 147, 121\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'U\')\" coords=\"150, 101, 171, 121\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'I\')\" coords=\"173, 101, 193, 121\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'O\')\" coords=\"196, 101, 218, 121\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'P\')\" coords=\"218, 101, 240, 121\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'A\')\" coords=\"12, 124, 32, 144\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'S\')\" coords=\"35, 124, 55, 144\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'D\')\" coords=\"58, 124, 78, 144\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'F\')\" coords=\"81, 124, 101, 144\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'G\')\" coords=\"104, 124, 124, 144\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'H\')\" coords=\"127, 124, 147, 144\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'J\')\" coords=\"150, 124, 171, 144\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'K\')\" coords=\"173, 124, 193, 144\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'L\')\" coords=\"196, 124, 218, 144\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'Ñ\')\" coords=\"218, 124, 240, 144\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'Z\')\" coords=\"12, 148, 32, 168\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'X\')\" coords=\"35, 148, 55, 168\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'C\')\" coords=\"58, 148, 78, 168\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'V\')\" coords=\"81, 148, 101, 168\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'B\')\" coords=\"104, 148, 124, 168\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'N\')\" coords=\"127, 148, 147, 168\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'M\')\" coords=\"150, 148, 171, 168\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'q\')\" coords=\"12, 172, 32, 192\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'w\')\" coords=\"35, 172, 55, 192\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'e\')\" coords=\"58, 172, 78, 192\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'r\')\" coords=\"81, 172, 101, 192\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'t\')\" coords=\"104, 172, 124, 192\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'y\')\" coords=\"127, 172, 147, 192\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'u\')\" coords=\"150, 172, 171, 192\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'i\')\" coords=\"173, 172, 193, 192\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'o\')\" coords=\"196, 172, 218, 192\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'p\')\" coords=\"218, 172, 240, 192\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'a\')\" coords=\"12, 195, 32, 215\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'s\')\" coords=\"35, 195, 55, 215\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'d\')\" coords=\"58, 195, 78, 215\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'f\')\" coords=\"81, 195, 101, 215\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'g\')\" coords=\"104, 195, 124, 215\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'h\')\" coords=\"127, 195, 147, 215\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'j\')\" coords=\"150, 195, 171, 215\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'k\')\" coords=\"173, 195, 193, 215\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'l\')\" coords=\"196, 195, 218, 215\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'ñ\')\" coords=\"218, 195, 240, 215\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'z\')\" coords=\"12, 219, 32, 239\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'x\')\" coords=\"35, 219, 55, 239\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'c\')\" coords=\"58, 219, 78, 239\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'v\')\" coords=\"81, 219, 101, 239\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'b\')\" coords=\"104, 219, 124, 239\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'n\')\" coords=\"127, 219, 147, 239\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:add(\'m\')\" coords=\"150, 219, 171, 239\" shape=\"rect\">"

+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:del(\'\')\" coords=\"172, 148, 238, 168\" shape=\"rect\">"
+"<area onMouseover=\"javascript:_CambiaCur(\'h\')\" onMouseout=\"javascript:_CambiaCur(\'m\')\" onClick=\"javascript:deltodo(\'\')\" coords=\"172, 219, 238, 239\" shape=\"rect\">"
+"</map>";
var _18CABE7A3C2 = window.location.protocol;
var _msjCampo = "Ponga el mouse en el campo deseado";
var _BBA64095CFB = "document.frmlogin.username";
var _msjUsar = "Por favor utilice nuestro teclado virtual.\rRecuerde que las mayúsculas y minúsculas influyen en su clave.";
var _2298F60136E = "bottom";
var _DBA9AEA77B2 = "right";
var _783BC9A5858 = "";
var input_size = 0;
var _B528F652D2C = 0;
var _951A95D8CD3=null;

var _EBD3DE4D64F;
var x = y = _E4BC3516BC5 = null;
var _7C2A20023CC = document.all;
var _A679A477FC9 = document.getElementById && !document.all;
var _A135CD2662D = document.layers;



function _FB4C51F09B0(obj) {
 var left = 0; 
 if (obj.offsetParent) {
  while (obj.offsetParent) {
   left += obj.offsetLeft;
   obj = obj.offsetParent;
  }
 }
 
 else if (obj.x) {
  left = obj.x;
 }
 return left;
}

function _1A72266D211(obj) {
 var top = 0;
 
 if (obj.offsetParent) {
  while (obj.offsetParent) {
   top += obj.offsetTop; 
   obj = obj.offsetParent;
  }
 }
 
 else if (obj.y) {
  top = obj.y;
 }
 return top;
}

function _059DB0FB40D() {
  if (_BBA64095CFB != "") {
    var _8BB4D70D1DA;
    _8BB4D70D1DA = eval(_BBA64095CFB);

    if (_8BB4D70D1DA) {
      _8BB4D70D1DA.focus();
      }
    }
 }


function down(e) {
  var _38DA1D2E2AE = _A679A477FC9 ? e.target : event.srcElement
  var _43FED693698 = _A679A477FC9 ? "HTML" : "BODY"

  while (_38DA1D2E2AE.tagName != _43FED693698 && _38DA1D2E2AE.className != "drag")
    {
    _38DA1D2E2AE = _A679A477FC9 ? _38DA1D2E2AE.parentNode : _38DA1D2E2AE.parentElement
    }

  if (_38DA1D2E2AE.className != "drag")
    {
    return (false);
    }

  
  if (_B528F652D2C == 0)
    _E4BC3516BC5 = _4B9381DBD2F();

  if (_7C2A20023CC)
    {
    x = parseInt(window.event.offsetX);
    y = parseInt(window.event.offsetY);
    }

  else if (_A679A477FC9)
    {
    x = parseInt(e.layerX);
    y = parseInt(e.layerY);
    }

  else
    {
    return false;
    }

  return false;
 }
	
	
	
function move(e){
  var _A200D5045E8 = document.body.clientWidth;
  var _A635F909965 = document.body.clientHeight;

  if (_7C2A20023CC && _E4BC3516BC5)
    {
      
    var _3D761740D91 = parseInt(_E4BC3516BC5.style.posLeft);
    var _3E25DB2779F = parseInt(_E4BC3516BC5.style.posTop);
    var _783EB30DEF4 = parseInt(window.event.clientX);
    var _06D8648F951 = parseInt(window.event.clientY);

    if ((_3D761740D91 >= 10 && _3D761740D91 <= _A200D5045E8 - 250 || _3D761740D91 <= 10 && _783EB30DEF4 - x > _3D761740D91)
      || (_3D761740D91 >= _A200D5045E8 - 250 && _783EB30DEF4 - x <= _3D761740D91))
      _E4BC3516BC5.style.posLeft = _783EB30DEF4 - x

    if (_3E25DB2779F <= 10 && document.body.scrollTop + _06D8648F951 - y >= _3E25DB2779F || _3E25DB2779F >= 10
      && _3E25DB2779F <= document.body.scrollTop + _A635F909965 - 50
      || _3E25DB2779F >= document.body.scrollTop + _A635F909965 - 50
      && document.body.scrollTop + _06D8648F951 - y <= _3E25DB2779F)
      _E4BC3516BC5.style.posTop = _06D8648F951 - y + document.body.scrollTop;
    }

  else if (_A679A477FC9 && _E4BC3516BC5)
    {
     
    var _3D761740D91 = parseInt(_E4BC3516BC5.style.left);
    var _3E25DB2779F = parseInt(_E4BC3516BC5.style.top);
    var _783EB30DEF4 = parseInt(e.clientX);
    var _06D8648F951 = parseInt(e.clientY);

    if ((isNaN(_3D761740D91)) || (_3D761740D91 >= 10 && _3D761740D91 <= _A200D5045E8 - 250 || _3D761740D91 <= 10
                  && _783EB30DEF4 - x > _3D761740D91)
      || (_3D761740D91 >= _A200D5045E8 - 260 && _783EB30DEF4 - x <= _3D761740D91))
      _E4BC3516BC5.style.left = _783EB30DEF4 - x

    if (_3E25DB2779F <= 10 && document.body.scrollTop + _06D8648F951 - y >= _3E25DB2779F || _3E25DB2779F >= 10
      && _3E25DB2779F <= document.body.scrollTop + _A635F909965 - 50
      || _3E25DB2779F >= document.body.scrollTop + _A635F909965 - 100
      && document.body.scrollTop + _06D8648F951 - y <= _3E25DB2779F)
      _E4BC3516BC5.style.top = _06D8648F951 - y + document.body.scrollTop;
    }
  else
    {
    return (false);
    }
  return false;
 }
	
	
function up() { _E4BC3516BC5 = null }	
	
var _37461504BC3 = null;
function _C3D80AFF5B0(name) {  
  _37461504BC3 = _4B9381DBD2F();
  _37461504BC3.captureEvents(Event.MOUSEDOWN | Event.MOUSEUP)
  _37461504BC3.onmousedown = go
  _37461504BC3.onmouseup = stop
 }
	
	
function go(e) { 
  _37461504BC3.captureEvents(Event.MOUSEMOVE)
  _37461504BC3.onmousemove = drag
  nsx = e.x
  nsy = e.y
 }
	
	
function drag(e) {  
  _37461504BC3.moveBy(e.x - nsx, e.y - nsy)
  return false
 }
	
	
function stop(){  
  _37461504BC3.releaseEvents(Event.MOUSEMOVE)
}
	
	
function _24B75B4A2CC(name){
  _37461504BC3 = _4B9381DBD2F();
  _37461504BC3.releaseEvents(Event.MOUSEDOWN)
  _37461504BC3.releaseEvents(Event.MOUSEUP)
  _37461504BC3.releaseEvents(Event.MOUSEMOVE)
}
	
	
function add(val){
  var _8BB4D70D1DA;
  var i = 0;
  var _23B621355A5 = false;

  if (_23B621355A5 == false)
    {
    _8BB4D70D1DA = eval(_783BC9A5858);

    if (_8BB4D70D1DA)
      {
      
      var _0EF8D961271 = new String(_8BB4D70D1DA.value);

      if (_0EF8D961271.length < input_size)
        _8BB4D70D1DA.value = _0EF8D961271 + val;
      _23B621355A5 = true;
      }
    }
  if (_23B621355A5 == false){
    alert(_msjCampo);
  }
}
	
	
function del(val){
  var _8BB4D70D1DA;
  var i = 0;
  var _23B621355A5 = false;

  if (_23B621355A5 == false)
    {
    _8BB4D70D1DA = eval(_783BC9A5858);

    if (_8BB4D70D1DA)
      {      
      var _0EF8D961271 = new String(_8BB4D70D1DA.value);

      if (_0EF8D961271.length > 0){
        _0EF8D961271 = _0EF8D961271.substring(0, _0EF8D961271.length - 1);
        _8BB4D70D1DA.value = _0EF8D961271
      }

      _23B621355A5 = true;
      }
    }

  if (_23B621355A5 == false){
    alert(_msjCampo);
  }
 }

function deltodo(val){
  var _8BB4D70D1DA;
  var i = 0;
  var _23B621355A5 = false;

  if (_23B621355A5 == false)
    {
    _8BB4D70D1DA = eval(_783BC9A5858);

    if (_8BB4D70D1DA)
      {      
      var _0EF8D961271 = new String(_8BB4D70D1DA.value);

      if (_0EF8D961271.length > 0){
        _0EF8D961271 = '';
        _8BB4D70D1DA.value = _0EF8D961271
      }

      _23B621355A5 = true;
      }
    }

  if (_23B621355A5 == false){
    alert(_msjCampo);
  }
 }
		
function show_vk(fieldRef){
  _783BC9A5858 = fieldRef;
  _951A95D8CD3=fieldRef;
	_951A95D8CD3.onkeypress=keyPress;
  _EBD3DE4D64F=fieldRef;
  var _6A8BDA1548F = _4B9381DBD2F();
  var _A200D5045E8;
  var _A635F909965;
	var max_top=0;

  if (_A135CD2662D){
    _A200D5045E8 = window.innerWidth;
    _A635F909965 = window.innerHeight;
  }
  else {
    _A200D5045E8 = document.body.clientWidth;
    _A635F909965 = document.body.clientHeight;	 
  }
	
	//alert(_783BC9A5858.offsetWidth+" -- "+_6A8BDA1548F.style.top);

  if (_7C2A20023CC && _6A8BDA1548F) {		
		 _6A8BDA1548F.style.posLeft= _FB4C51F09B0(_783BC9A5858) + 150;		
		 _6A8BDA1548F.style.posTop = _1A72266D211(_783BC9A5858) - 20 ;	
     max_top= _6A8BDA1548F.style.posTop;		 
  }
  else if (_A679A477FC9 && _6A8BDA1548F) {
		
		 _6A8BDA1548F.style.left= _FB4C51F09B0(_783BC9A5858) + 220;
		 _6A8BDA1548F.style.top = _1A72266D211(_783BC9A5858) + 0 ;
     max_top=	_1A72266D211(_783BC9A5858);		 
  }  
	
	if((max_top+150) > _A635F909965) {	
	
		if (_7C2A20023CC && _6A8BDA1548F) {		
			_6A8BDA1548F.style.posLeft= _FB4C51F09B0(_783BC9A5858) + 250;		
			_6A8BDA1548F.style.posTop = _1A72266D211(_783BC9A5858) - 20 ;					 
		}
		else if (_A679A477FC9 && _6A8BDA1548F) {		
		 _6A8BDA1548F.style.left= _FB4C51F09B0(_783BC9A5858) + 120;
		 _6A8BDA1548F.style.top = _1A72266D211(_783BC9A5858) - 120 ;		
		} 	
	}

  /******CAMBIO **********/
  _6A8BDA1548F.style.left= getPos(_783BC9A5858)[0]-(250-_783BC9A5858.offsetWidth)/2;
  _6A8BDA1548F.style.top = getPos(_783BC9A5858)[1]-245;
	/******CAMBIO **********/

  if (fieldRef != ''){
    if ((_7C2A20023CC || _A679A477FC9) && _6A8BDA1548F)
      _6A8BDA1548F.style.visibility = 'visible';

    else if ((_A135CD2662D) && _6A8BDA1548F)
      _6A8BDA1548F.visibility = 'show';
  }
  
  //alert(_6A8BDA1548F.style.top);
		
}	
	
function hide_vk(fieldRef) {
  _783BC9A5858 = "";
  input_size = 0;
  var _6A8BDA1548F = _4B9381DBD2F();
	
	

	if ((_7C2A20023CC || _A679A477FC9) && _6A8BDA1548F)
			_6A8BDA1548F.style.visibility = 'hidden'

	else if ((_A135CD2662D) && _6A8BDA1548F)
			_6A8BDA1548F.visibility = 'hide';
	
}
	
	
function _4B9381DBD2F()
  {
  var _6A8BDA1548F;

  if (_7C2A20023CC){
    _6A8BDA1548F = eval("document.all._E4BC3516BC5");
  }
  else if (_A679A477FC9){	 
    _6A8BDA1548F = eval("document.getElementById('_E4BC3516BC5')");		
  }
  else if (_A135CD2662D){
    _6A8BDA1548F = eval("document.layers['_E4BC3516BC5']");
  }
	
  return (_6A8BDA1548F);
}
	
	
var _F26FD6FA47B = -1;
function keyPress(e){
  var key;

  if (_7C2A20023CC)
    key = event.keyCode

  else if (_A679A477FC9)
    key = e.which

  else if (_A135CD2662D)
    {
    key = e.which

    if (key == _F26FD6FA47B)
      {
      key = 0;
      _F26FD6FA47B = -1;
      }

    else
      {
      _F26FD6FA47B = key;
      }
    }
		
  if (key != 0 && key != 13 && key != 8 && key != 9) {
    alert(_msjUsar);
    var _06347F7A068;
    var _A9DE4BC90D1;
    _A9DE4BC90D1 = _EBD3DE4D64F.value;

    if (_A9DE4BC90D1.length > 0) {
      _A9DE4BC90D1 = _A9DE4BC90D1.substring(0, _A9DE4BC90D1.length - 1);
      _EBD3DE4D64F.value = _A9DE4BC90D1
      }
    _EBD3DE4D64F.focus();
    return (false);
    }
  }
	
	
function _CambiaCur(cursorType){
  
	if (cursorType == "h")cursorType="hand";
	if (cursorType == "m")cursorType="move";
	if (cursorType == "c")cursorType="crosshair";
  if (_7C2A20023CC)    {
    var _6A8BDA1548F = _4B9381DBD2F();
    _6A8BDA1548F.style.cursor = cursorType;
  }

  if (cursorType == "h") _B528F652D2C = 1;
  else _B528F652D2C = 0;
}

var _873D41A8FA9__7C2A20023CC=""+
"<div id=\"_E4BC3516BC5\" class=\"drag\">"+
"<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">"+
"<tr>"+
"<td align=\"center\"> <img src=\"" + _imgTeclado + "\"name=\"kbimg\" border=\"0\" usemap=\"#_336021DFDEA\" alt=\"\"> </td>"+
"</tr>"+
"</table>"+
"</DIV>"+
"<script language=\"JavaScript\">if (_7C2A20023CC || _A679A477FC9) "+
"{"+
"_B117DE6E26C=_4B9381DBD2F();"+
"_B117DE6E26C.onmousedown=down;"+
"_B117DE6E26C.onmouseup=up;"+
"_B117DE6E26C.onmousemove=move;"+
"}</script>";	


var _873D41A8FA9__A679A477FC9=""+
"<div id=\"_E4BC3516BC5\" class=\"drag\">"+
"<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">"+
"<tr>"+
"<td align=\"center\"> <img src=\"" + _imgTeclado + "\"name=\"kbimg\" border=\"0\" usemap=\"#_336021DFDEA\" alt=\"\"> </td>"+
"</tr>"+
"</table>"+
"</DIV>"+

"<script language=\"JavaScript\">if (_7C2A20023CC || _A679A477FC9) "+
"{"+
"_B117DE6E26C=_4B9381DBD2F();"+
"_B117DE6E26C.onmousedown=down;"+
"_B117DE6E26C.onmouseup=up;"+
"_B117DE6E26C.onmousemove=move;"+
"}</script>";	

function which_layer(){
if (_A679A477FC9) return (_873D41A8FA9__A679A477FC9);
if (_7C2A20023CC) return (_873D41A8FA9__7C2A20023CC);
}


function getPos(elem){
    var tmp=elem;
    var left=tmp.offsetLeft;
    var top=tmp.offsetTop;
    while (tmp=tmp.offsetParent) left += tmp.offsetLeft;
    tmp=elem;
    while(tmp=tmp.offsetParent) top+=tmp.offsetTop;
    return [left,top];
}