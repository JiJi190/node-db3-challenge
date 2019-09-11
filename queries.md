# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
    SELECT products.productName, categories.CategoryName
    FROM Products
    inner JOIN Categories ON products.CategoryID = Categories.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
    SELECT orders.orderid, Shippers.ShipperName, orders.orderdate 
    FROM Orders 
    inner JOIN Shippers ON orders.ShipperID = shippers.ShipperID  
    WHERE OrderDate BETWEEN "1996-07-04" AND "1997-01-09"

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
    SELECT orderdetails.orderID, products.productName 
    FROM OrderDetails 
    inner JOIN Products ON orderdetails.productID = products.productid where orderdetails.orderID = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
     SELECT orders.orderid, customers.customername, employees.lastname 
     FROM Orders 
     left JOIN Customers ON orders.customerid = customers.customerid left JOIN Employees ON orders.employeeID = employees.employeeid
     
### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 