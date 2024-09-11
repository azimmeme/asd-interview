-- Retrieve customer names, order dates, total amounts, and average total amount per customer for orders from customers in 'New York'
SELECT 
    c.customer_name,
    o.order_date,
    o.total_amount,
    AVG(o.total_amount) OVER (PARTITION BY c.customer_id) AS average_total_amount
FROM 
    customers c
JOIN 
    orders o ON c.customer_id = o.customer_id
WHERE 
    c.city = 'New York';
