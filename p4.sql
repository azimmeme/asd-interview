-- Update the price of a specific product by specifying the product_id
UPDATE products
SET price = 1200.00
WHERE product_id = 1;

-- Update the price of all products by increasing it by 10%
UPDATE products
SET price = price * 1.10;