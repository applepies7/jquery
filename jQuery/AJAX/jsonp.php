<?php
//서버쪽에서는 데이터를 포함한 문자열을 만들어주면됨
$fun = $_GET["callback"];
$ret = $fun.'({
"name":"인",
"age":"또라이"
})';
echo $ret;
?>