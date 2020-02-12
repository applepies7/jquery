<!DOCTYPE html>
<html>
<body>

<form action="upload.php" method="post" enctype="multipart/form-data">  
<!-- 파일전송시 꼭 필요 : enctype="multipart/form-data // 쓰지않으면 name과 value으로만 값이 넘어감-->
    Select image to upload:
    <img src="" alt="더미 글자로 대체" width=100 height=100><br>
    <input type="file" name="fileToUpload" id="fileToUpload" onchange="f_chgImg()"><br>
    <input type="submit" value="Upload Image" name="submit">
</form>
<script>
    function f_chgImg(){
        // 사용자가 선택한 파일 읽기
        var v_userFile = 
    }
</script>
</body>
</html>