<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags" %>

<div class="row">
    <div class='col-md-12 text-center'>
        <h1>Найди две одинаковые картинки</h1>
        <button class="btn btn-info create-table">Начать новую игру</button>
        <div class="alert alert-success" id="alert" style="display: none">Поздравляем! Вы победили!</div>
    </div>
</div>