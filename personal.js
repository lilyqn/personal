<!DOCTYPE html>
<html>
<head>
    <style>
        .candidate { margin-bottom: 1rem; }
        .qualified { color: green; }
        .unqualified { color: red; }
    </style>
    <title>Подбор персонала</title>
</head>
<body>

<h2>Добавить кандидата</h2>
<form id="candidate_form">
    <input type="text" id="name" placeholder="Имя" required>
    <input type="number" id="experience" placeholder="Опыт работы (лет)" required>
    <button type="submit">Добавить</button>
</form>

<h2>Список кандидатов</h2>
<div id="candidates"></div>

<script>
document.getElementById('candidate_form').onsubmit = function(event) {
    event.preventDefault(); // Предотвратить обычную отправку формы

    var name = document.getElementById('name').value;
    var experience = document.getElementById('experience').value;
    var candidateClass = 'unqualified';

    // Критерий квалификации: минимум 2 года опыта
    if (experience >= 2) {
        candidateClass = 'qualified';
    }

    var candidateDiv = document.createElement('div');
    candidateDiv.className = 'candidate ' + candidateClass;
    candidateDiv.textContent = 'Имя: ' + name + ', Опыт работы: ' + experience + ' лет';

    document.getElementById('candidates').appendChild(candidateDiv);
    
    // Очистка формы после добавления кандидата
    document.getElementById('name').value = '';
    document.getElementById('experience').value = '';
};
</script>

</body>
</html>
