fetch('/api/v1/todos')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector('#output').innerHTML = data.todos[0].title;
    })