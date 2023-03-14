export const createTaskTable = `
CREATE TABLE IF NOT EXISTS Task (
  id SERIAL PRIMARY KEY,
  taskType VARCHAR(128) not null, -- -> Type
  branch VARCHAR(128) not null, -- -> Branch
  label VARCHAR(256),
  description TEXT,
  taskInstruction VARCHAR(256),
  startDate DATETIME,
  endDate DATETIME,
  status ENUM('created', 'started', 'finished', 'aborted'),
  createdOn DATETIME,
  createdBy VARCHAR(64) not null, -- -> User
  updatedOn DATETIME,
  updatedBy VARCHAR(64) not null, -- -> User
  startedOn DATETIME,
  startedBy VARCHAR(64), -- -> User
  finishedOn DATETIME,
  finishedBy VARCHAR(64), -- -> User
  assignedTo VARCHAR(64) -- -> User
);`;

export const createTaskTypeTable = `
CREATE TABLE IF NOT EXISTS TaskType(
  id SERIAL PRIMARY KEY,
  name VARCHAR(128) UNIQUE,
  archived BOOLEAN,
  createdOn DATETIME,
  createdBy VARCHAR(64) not null, -- - > User 
  updatedOn DATETIME,
  updatedBy VARCHAR(64) not null -- - > User
);`;

export const createBranchesTable = `
CREATE TABLE IF NOT EXISTS Branch(
  id SERIAL PRIMARY KEY,
  name VARCHAR(128) UNIQUE,
  description VARCHAR(256),
  archived BOOLEAN,
  createdOn DATETIME,
  createdBy VARCHAR(64) not null, -- - > User 
  updatedOn DATETIME,
  updatedBy VARCHAR(64) not null -- - > User
);`;

export const createUsersTable = `
CREATE TABLE IF NOT EXISTS User (
  id SERIAL PRIMARY KEY,
  login VARCHAR(64) UNIQUE,
  name VARCHAR(64) DEFAULT '',
  password VARCHAR(128),
  createdOn DATETIME,
  createdBy VARCHAR(64), -- -> User
  updatedOn DATETIME,
  updatedBy VARCHAR(64) -- -> User
);`

export const modifyExistingTables = `ALTER TABLE TaskType ADD CONSTRAINT FK_TaskType_createdBy_login_User FOREIGN KEY(createdBy) REFERENCES User(login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE TaskType ADD CONSTRAINT FK_TaskType_updatedBy_login_User FOREIGN KEY(updatedBy) REFERENCES User(login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE User ADD CONSTRAINT FK_User_createdBy_login_User FOREIGN KEY(createdBy) REFERENCES User(login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE User ADD CONSTRAINT FK_User_updatedBy_login_User FOREIGN KEY(updatedBy) REFERENCES User(login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Branch ADD CONSTRAINT FK_Branch_createdBy_login_User FOREIGN KEY(createdBy) REFERENCES User(login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Branch ADD CONSTRAINT FK_Branch_updatedBy_login_User FOREIGN KEY(updatedBy) REFERENCES User(login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Task ADD CONSTRAINT FK_Task_createdBy_login_User FOREIGN KEY(createdBy) REFERENCES User(login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Task ADD CONSTRAINT FK_Task_updatedBy_login_User FOREIGN KEY(updatedBy) REFERENCES User(login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Task ADD CONSTRAINT FK_Task_startedBy_login_User FOREIGN KEY(startedBy) REFERENCES User(login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Task ADD CONSTRAINT FK_Task_finishedBy_login_User FOREIGN KEY(finishedBy) REFERENCES User(login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Task ADD CONSTRAINT FK_Task_assignedTo_login_User FOREIGN KEY(assignedTo) REFERENCES User(login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Task ADD CONSTRAINT FK_Task_taskType_name_TaskType FOREIGN KEY(taskType) REFERENCES TaskType(name) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Task ADD CONSTRAINT FK_Task_taskType_name_Branch FOREIGN KEY(branch) REFERENCES Branch(name) ON UPDATE CASCADE ON DELETE NO ACTION;`.split('\n');

export const insertValues = `INSERT INTO User(login, name, password, createdOn, createdBy, updatedOn, updatedBy) VALUES('admin', 'Administrator', '12345', '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO User(login, name, password, createdOn, createdBy, updatedOn, updatedBy) VALUES('hpeter', 'Peter Hammond', '12345', '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO User(login, name, password, createdOn, createdBy, updatedOn, updatedBy) VALUES('testeban', 'Stefan Roccotelli', '12345', '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO User(login, name, password, createdOn, createdBy, updatedOn, updatedBy) VALUES('fadmin', 'Fach-Administrator', '12345', '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO Branch(name, description, archived, createdOn, createdBy, updatedOn, updatedBy) VALUES('Strom', 'Stromaufgaben', 0, '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO Branch(name, description, archived, createdOn, createdBy, updatedOn, updatedBy) VALUES('Gas', 'Gasaufgaben', 0, '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO Branch(name, description, archived, createdOn, createdBy, updatedOn, updatedBy) VALUES('Telekommunikation', 'Telekommunikationsaufgaben', 0, '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO TaskType(name, archived, createdOn, createdBy, updatedOn, updatedBy) VALUES('Tastatureinbau', 0, '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO TaskType(name, archived, createdOn, createdBy, updatedOn, updatedBy) VALUES('Tastaturausbau', 0, '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO TaskType(name, archived, createdOn, createdBy, updatedOn, updatedBy) VALUES('PC Installation', 0, '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO TaskType(name, archived, createdOn, createdBy, updatedOn, updatedBy) VALUES('PC Abbau', 'Aufgabe, bei der eine PC abgebaut wird', 'PC abbauen', 'medium', 0, '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO Task(taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES('PC Abbau', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'created', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task(taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES('PC Installation', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'created', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task(taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES('Tastatureinbau', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'started', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task(taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES('Tastaturausbau', 'Gas', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'finished', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task(taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES('PC Abbau', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'created', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task(taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES('PC Installation', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'created', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task(taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES('Tastatureinbau', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'started', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task(taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES('Tastaturausbau', 'Gas', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'finished', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task(taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES('PC Abbau', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'created', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task(taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES('PC Installation', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'created', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task(taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES('Tastatureinbau', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'started', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task(taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES('Tastaturausbau', 'Gas', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'finished', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);`.split('\n');

export const dropTaskTable = 'DROP TABLE IF EXISTS Task;';
export const dropTaskTypeTable = 'DROP TABLE IF EXISTS TaskType;';
export const dropBranchTable = 'DROP TABLE IF EXISTS Branch;';
export const dropUsersTable = 'DROP TABLE IF EXISTS User;';
