-- Calculate the average salary for each department
SELECT 
    department,
    AVG(salary) AS average_salary
FROM 
    employees
GROUP BY 
    department;
    
-- Calculate the highest salary for each department and retrieve department name, highest salary, and employee(s) with that salary
WITH DepartmentSalaries AS (
    SELECT 
        department,
        salary,
        name
    FROM 
        employees
),
MaxSalaries AS (
    SELECT 
        department,
        MAX(salary) AS highest_salary
    FROM 
        DepartmentSalaries
    GROUP BY 
        department
)
SELECT 
    ds.department,
    ms.highest_salary,
    ds.name AS employee_name
FROM 
    DepartmentSalaries ds
JOIN 
    MaxSalaries ms ON ds.department = ms.department AND ds.salary = ms.highest_salary;
