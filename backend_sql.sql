CREATE TABLE IF NOT EXISTS User (
	id SERIAL PRIMARY KEY,
	login VARCHAR(64) UNIQUE,
	name VARCHAR(64) DEFAULT '',
	password VARCHAR(128),
	createdOn DATETIME,
	createdBy VARCHAR(64), -- -> User
	updatedOn DATETIME,
	updatedBy VARCHAR(64) -- -> User
);

CREATE TABLE IF NOT EXISTS Branch (
	id SERIAL PRIMARY KEY,
	name VARCHAR(128) UNIQUE,
	description VARCHAR(256),
	achieved BOOLEAN,
	createdOn DATETIME,
	createdBy VARCHAR(64) not null, -- -> User
	updatedOn DATETIME,
	updatedBy VARCHAR(64) not null -- -> User
);

CREATE TABLE IF NOT EXISTS TaskType (
	id SERIAL PRIMARY KEY,
	name VARCHAR(128) UNIQUE,
	defaultDescription TEXT,
	defaultTaskInstruction VARCHAR(256),
	priority ENUM('low', 'medium', 'high', 'critical'),
	achieved BOOLEAN,
	createdOn DATETIME,
	createdBy VARCHAR(64) not null, -- -> User
	updatedOn DATETIME,
	updatedBy VARCHAR(64) not null -- -> User
);

CREATE TABLE IF NOT EXISTS Task (
	id SERIAL PRIMARY KEY,
	taskType VARCHAR(128) not null, -- -> Type
	branch VARCHAR(128) not null, -- -> Branch
	label VARCHAR(256),
	description TEXT,
	taskInstruction VARCHAR(256),
	startDate DATETIME,
	endDate DATETIME,
	status ENUM('created', 'planned', 'started', 'finished', 'aborted'),
	abortingRemark VARCHAR(256),
	finishingRemark VARCHAR(256),
	createdOn DATETIME,
	createdBy VARCHAR(64) not null, -- -> User
	updatedOn DATETIME,
	updatedBy VARCHAR(64) not null, -- -> User
	startedOn DATETIME,
	startedBy VARCHAR(64), -- -> User
	finishedOn DATETIME,
	finishedBy VARCHAR(64), -- -> User
	assignedTo VARCHAR(64) -- -> User
);

ALTER TABLE TaskType ADD CONSTRAINT FK_TaskType_createdBy_login_User FOREIGN KEY (createdBy) REFERENCES User (login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE TaskType ADD CONSTRAINT FK_TaskType_updatedBy_login_User FOREIGN KEY (updatedBy) REFERENCES User (login) ON UPDATE CASCADE ON DELETE NO ACTION;

ALTER TABLE User ADD CONSTRAINT FK_User_createdBy_login_User FOREIGN KEY (createdBy) REFERENCES User (login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE User ADD CONSTRAINT FK_User_updatedBy_login_User FOREIGN KEY (updatedBy) REFERENCES User (login) ON UPDATE CASCADE ON DELETE NO ACTION;

ALTER TABLE Branch ADD CONSTRAINT FK_Branch_createdBy_login_User FOREIGN KEY (createdBy) REFERENCES User (login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Branch ADD CONSTRAINT FK_Branch_updatedBy_login_User FOREIGN KEY (updatedBy) REFERENCES User (login) ON UPDATE CASCADE ON DELETE NO ACTION;

ALTER TABLE Task ADD CONSTRAINT FK_Task_createdBy_login_User FOREIGN KEY (createdBy) REFERENCES User (login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Task ADD CONSTRAINT FK_Task_updatedBy_login_User FOREIGN KEY (updatedBy) REFERENCES User (login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Task ADD CONSTRAINT FK_Task_startedBy_login_User FOREIGN KEY (startedBy) REFERENCES User (login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Task ADD CONSTRAINT FK_Task_finishedBy_login_User FOREIGN KEY (finishedBy) REFERENCES User (login) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Task ADD CONSTRAINT FK_Task_assignedTo_login_User FOREIGN KEY (assignedTo) REFERENCES User (login) ON UPDATE CASCADE ON DELETE NO ACTION;

ALTER TABLE Task ADD CONSTRAINT FK_Task_taskType_name_TaskType FOREIGN KEY (taskType) REFERENCES TaskType (name) ON UPDATE CASCADE ON DELETE NO ACTION;

ALTER TABLE Task ADD CONSTRAINT FK_Task_taskType_name_Branch FOREIGN KEY (branch) REFERENCES Branch (name) ON UPDATE CASCADE ON DELETE NO ACTION;