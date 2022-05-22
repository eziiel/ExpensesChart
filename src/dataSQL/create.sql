DROP TABLE IF EXISTS expensesChart;
CREATE TABLE expensesChart (
  id INT AUTO_INCREMENT NOT NULL,
  semanaN VARCHAR (5) NOT NULL,
  semanaD VARCHAR (3) NOT NULL,
  amount DECIMAL (5,2) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO expensesChart
(semanaN,semanaD,amount)
VALUES
("01/04","mon",17.45),
("01/04","tue",34.91),
("01/04","wed",52.36),
("01/04","thu",31.07),
("01/04","fri",23.39),
("01/04","sat",43.28),
("01/04","sun",25.48);
