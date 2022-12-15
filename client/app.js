fetch("/api/meals")
.then(res => res.json())
.then((data) => {
    console.log(data);
});