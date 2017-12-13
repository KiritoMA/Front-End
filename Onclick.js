<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script type="text/javascript">
        function changetext(id)
        {
            id.innerHTML="thank";
        }
    </script>
</head>
<body>
    <h1 id="id">My Heading 1</h1>
    <button type="button" onclick="document.getElementById('id').style.color='red'">Click here</button>
    <p onclick="changetext(this)">please click</p>
</body>
</html>
