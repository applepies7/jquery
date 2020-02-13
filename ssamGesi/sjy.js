var request = {}                                                // 빈객체 생성
   request.getParameter=function(p_name){    // 메소드 추가         
      var v_url =  decodeURIComponent(location.href);
      if(v_url.indexOf("?") == -1) return null;   // 아예 넘어온 값이 없다면 더 할 필요없이 종료
      var v_datas = v_url.split("?");
        var v_amps = v_datas[1].split("&");  // ? 오른쪽 값만 필요하니까, 0번은 버림
        for(var j=0; j< v_amps.length; j++){
          var v_equals = v_amps[j].split("=");
          if(v_equals[0]== p_name){
            return v_equals[1];
          }
        }
        return null;   // 해당하는 name값을 못 찾았을 경우
   }

   request.getParameterValues=function(p_name){
    var v_url =  decodeURIComponent(location.href);
    if(v_url.indexOf("?") == -1) return null;   // 아예 넘어온 값이 없다면 더 할 필요없이 종료
      var v_vals = [];                   // 값을 담을 빈 배열
      var v_datas = v_url.split("?");
      var v_amps = v_datas[1].split("&");  // ? 오른쪽 값만 필요하니까, 0번은 버림
      for(var j=0; j< v_amps.length; j++){
        var v_equals = v_amps[j].split("=");
        if(v_equals[0]== p_name){
          v_vals.push(v_equals[1]);              // = 오른쪽 값을 배열에 담음
        }
      }
      if(!v_vals.length) return null;
      return v_vals;   // 값을 담은 배열을 리턴
  }

  var out={}; // 빈객체 생성
  out.print=function(p_msg){
      document.write(p_msg);
  }
  out.println=function(p_msg){
      document.write(p_msg+"<br>");
     // out.print(p_msg+"<br>");
  }