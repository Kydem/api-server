fetch("/api/meals")
.then(res => res.json())
.then((data) => {
    res.send(data);
});