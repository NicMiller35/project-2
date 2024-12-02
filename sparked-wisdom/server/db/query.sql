SELECT *
FROM Quotes
ORDER BY RAND()
LIMIT 1;


INSERT INTO Saved_Quotes (user_id, quote_id)
VALUES (1, 2);


SELECT q.content, q.author, sq.saved_at
FROM Saved_Quotes sq
JOIN Quotes q ON sq.quote_id = q.quote_id
WHERE sq.user_id = 1;