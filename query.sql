SELECT patron.name, meal.kind, meal.calories
FROM patron
INNER JOIN meal ON patron.id = meal.patron;
WHERE meal.id = 1;