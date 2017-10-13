CREATE TABLE departments(
	department_id INT AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    over_head_costs DECIMAL NOT NULL,
    PRIMARY KEY (department_id)
);

INSERT INTO departments(department_name, over_head_costs)
VALUES ('Electronics', 10000);

INSERT INTO departments(department_name, over_head_costs)
VALUES ('Lifestyle', 5000);

INSERT INTO departments(department_name, over_head_costs)
VALUES ('Pets', 3000);

INSERT INTO departments(department_name, over_head_costs)
VALUES ('Books', 100);

SELECT * FROM departments;