import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

const sql = postgres({ database: "calorie_tracker" });

const app = express();


app.use(express.json());
app.use(express.static("./client"));

app.get("/api/meals", (req, res) => {
    sql`SELECT * FROM meal`.then((result) => {
        res.json(result);
    });
});

app.get("/api/meals/:id", (req, res) => {
    const id = req.params.id;

    sql`SELECT * FROM meals WHERE id = ${id}`
    .then((meal) => {
        if (meal !== undefined) {
            res.json(meal[0]);
        } else {
            res.status(404);
            res.set("Content-Type", "text/plain");
            res.send("Not found");
        }
    });
});

app.post("/api/meals", (req, res) => {
    const { kind, calories } = req.body;
    sql`INSERT INTO meal (kind, calories) VALUES (${kind}, ${calories}) RETURNING *`.then((result) => {
        res.json(result);
    })
})

app.listen(3000);