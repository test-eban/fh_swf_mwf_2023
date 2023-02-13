INSERT INTO User (login, name, password, createdOn, createdBy, updatedOn, updatedBy) VALUES ('admin', 'Administrator', '12345', '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO User (login, name, password, createdOn, createdBy, updatedOn, updatedBy) VALUES ('hpeter', 'Peter Hammond', '12345', '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO User (login, name, password, createdOn, createdBy, updatedOn, updatedBy) VALUES ('testeban', 'Stefan Roccotelli', '12345', '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO User (login, name, password, createdOn, createdBy, updatedOn, updatedBy) VALUES ('fadmin', 'Fach-Administrator', '12345', '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');

INSERT INTO Branch (name, description, achieved, createdOn, createdBy, updatedOn, updatedBy) VALUES ('Strom', 'Stromaufgaben', 0, '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO Branch (name, description, achieved, createdOn, createdBy, updatedOn, updatedBy) VALUES ('Gas', 'Gasaufgaben', 0, '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO Branch (name, description, achieved, createdOn, createdBy, updatedOn, updatedBy) VALUES ('Telekommunikation', 'Telekommunikationsaufgaben', 0, '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');

INSERT INTO TaskType (name, defaultDescription, defaultTaskInstruction, priority, achieved, createdOn, createdBy, updatedOn, updatedBy) VALUES ('Tastatureinbau', 'Aufgabe, bei der eine Tastatur eingebaut wird', 'Tastatur einbauen', 'medium', 0, '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO TaskType (name, defaultDescription, defaultTaskInstruction, priority, achieved, createdOn, createdBy, updatedOn, updatedBy) VALUES ('Tastaturausbau', 'Aufgabe, bei der eine Tastatur ausgebaut wird', 'Tastatur ausbauen', 'low', 0, '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO TaskType (name, defaultDescription, defaultTaskInstruction, priority, achieved, createdOn, createdBy, updatedOn, updatedBy) VALUES ('PC Installation', 'Aufgabe, bei der eine PC installiert wird', 'PC einbauen', 'high', 0, '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');
INSERT INTO TaskType (name, defaultDescription, defaultTaskInstruction, priority, achieved, createdOn, createdBy, updatedOn, updatedBy) VALUES ('PC Abbau', 'Aufgabe, bei der eine PC abgebaut wird', 'PC abbauen', 'medium', 0, '2023-02-13 22:00:00', 'admin', '2023-02-13 22:00:00', 'admin');

INSERT INTO Task (taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES ('PC Abbau', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'planned', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task (taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES ('PC Installation', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'planned', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task (taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES ('Tastatureinbau', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'started', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task (taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES ('Tastaturausbau', 'Gas', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'finished', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);

INSERT INTO Task (taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES ('PC Abbau', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'planned', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task (taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES ('PC Installation', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'planned', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task (taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES ('Tastatureinbau', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'started', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task (taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES ('Tastaturausbau', 'Gas', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'finished', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);

INSERT INTO Task (taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES ('PC Abbau', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'planned', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task (taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES ('PC Installation', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'planned', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task (taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES ('Tastatureinbau', 'Telekommunikation', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'started', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
INSERT INTO Task (taskType, branch, label, description, taskInstruction, startDate, endDate, status, abortingRemark, finishingRemark, createdOn, createdBy, updatedOn, updatedBy, startedOn, startedBy, finishedOn, finishedBy, assignedTo) VALUES ('Tastaturausbau', 'Gas', 'Aufgabenlabel', 'Aufgabenbeschreibung', 'Aufgabenanweisung', '2023-02-10 22:00:00', '2023-02-10 22:00:00', 'finished', NULL, NULL, '2023-02-10 22:00:00', 'admin', '2023-02-10 22:00:00', 'admin', '2023-02-13 22:00:00', NULL, NULL, NULL, NULL);
