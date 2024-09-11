CREATE INDEX idx_department_salary ON employees(department, salary);

"Reasoning Behind the Index Choice

1.Columns for the Index:

Department: This column is used to filter the results specifically for employees in the 'Sales' department. Since this is a specific value and can significantly reduce the number of rows considered, it provides good selectivity.
Salary: This column is used for a range condition (salary > 50000). Including it in the index allows the database to quickly find all employees in the 'Sales' department whose salary exceeds $50,000.

2.Selectivity:

The index should be created on columns that have a high degree of uniqueness or filter down the result set significantly. The combination of department and salary is likely to provide good selectivity because:
The department condition narrows down the rows significantly.
The salary condition further filters the remaining rows, making it efficient to access the relevant data.

3.Order of Conditions:

The order of the columns in the index matters. Since the query filters by department first and then by salary, placing department first in the index improves the ability to narrow down results quickly before applying the salary condition. "