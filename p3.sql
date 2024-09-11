-- Calculate total quantity sold, average quantity per order, total sales amount, and average sales amount per order
SELECT 
    SUM(s.quantity) AS total_quantity_sold,
    AVG(s.quantity) AS average_quantity_per_order,
    SUM(s.quantity * p.price) AS total_sales_amount,
    AVG(s.quantity * p.price) AS average_sales_amount_per_order
FROM 
    sales s
JOIN 
    products p ON s.product_id = p.product_id;
