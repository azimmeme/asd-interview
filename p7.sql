-- Delete a specific customer by specifying the customer_id
DELETE FROM customers
WHERE customer_id = 1;

-- Delete related records in orders and sales before deleting the customer
DELETE FROM sales
WHERE customer_id = 1;

DELETE FROM orders
WHERE customer_id = 1; 

DELETE FROM customers
WHERE customer_id = 1;
