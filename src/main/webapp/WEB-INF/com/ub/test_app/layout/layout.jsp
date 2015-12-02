<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>
<head>

    <meta charset="UTF-8"/>
    <title>test_app</title>
    <link rel="stylesheet" href="/static/test_app/css/custom.css"/>
    <link rel="stylesheet" href="/static/test_app/css/bootstrap.min.css"/>


</head>
<body>
<div class="container">
    <jsp:include page="components/header.jsp"/>
    <tiles:insertAttribute name="content"/>
</div>
<script src="/static/test_app/js/jquery-1.11.3.js"></script>
<script src="/static/test_app/js/index.js"></script>
</body>
</html>
