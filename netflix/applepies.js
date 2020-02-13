//jsp request.getParameter , getParameterValues 기능
var request = {}; //빈객체 생성

request.getParameter = function (p_name) { //매서드 추가
    var v_url = decodeURIComponent(location.href);
    if (v_url.indexOf("?") == -1) return null; //?가 없으면 값이 넘어온것이 없음. (get방식인경우.)
    var v_datas = v_url.split("?");
    var amps = v_datas[1].split("&");
    // alert("루프1:"+v_datas[1]);
    for (var j = 0; j < amps.length; j++) {
        // alert("루프1:"+amps[j]);
        var v_equals = amps[j].split("=");
        //    alert("name:"+v_equals[0]);
        //    alert("value:"+v_equals[1]);
        if (v_equals[0] == p_name) {
            return v_equals[1];
        }
    }
    return null; //해당 p_name값 못찾았을때.
}

request.getParameterValues = function (p_name) {
    var v_url = decodeURIComponent(location.href);
    if (v_url.indexOf("?") == -1) return null; //?가 없으면 값이 넘어온것이 없음. (get방식인경우.)
    var v_datas = v_url.split("?");
    var c_value = [];
    var amps = v_datas[1].split("&");
    for (var j = 0; j < amps.length; j++) {
        var v_equals = amps[j].split("=");
        if (v_equals[0] == p_name) {
            c_value.push(v_equals[1]);
        }
    }
    if (!c_value.length) return null;
    return c_value;
}

//jsp out.print,println

var out = {}
out.print = function (p_msg) {
    document.write(p_msg);
}
out.println = function (p_msg) {
    document.write(p_msg + "<br>");
}