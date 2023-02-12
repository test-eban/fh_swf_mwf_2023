CREATE TABLE IF NOT EXISTS User (
  login VARCHAR(64) PRIMARY KEY,
  name VARCHAR(64) DEFAULT '',
  password VARCHAR(128),
  createdOn DATETIME,
  createdBy VARCHAR(64), -- -> User
  updatedOn DATETIME,
  updatedBy VARCHAR(64) -- -> User
);

ALTER TABLE User ADD COLUMN createdBy USER, updatedBy USER;

CREATE TABLE IF NOT EXISTS Branch (
	name VARCHAR(128) PRIMARY KEY,
	description VARCHAR(256),
	achieved BOOLEAN,
	createdOn DATETIME,
	createdBy VARCHAR(64), -- -> User
	updatedOn DATETIME,
	updatedBy VARCHAR(64) -- -> User
);

CREATE TABLE IF NOT EXISTS TaskType (
	name VARCHAR(128) PRIMARY KEY,
	description VARCHAR(256),
	priority priorityEnum,
	achieved BOOLEAN,
	createdOn DATETIME,
	createdBy VARCHAR(64), -- -> User
	updatedOn DATETIME,
	updatedBy VARCHAR(64) -- -> User
);

CREATE TABLE IF NOT EXISTS Task (
	uid SERIAL PRIMARY KEY,
	type VARCHAR(128), -- -> Type
	branch VARCHAR(128), -- -> Branch
	label VARCHAR(256),
	description VARCHAR(-1),
	startDate DATETIME,
	endDate DATETIME,
	status statusEnum
	abortingRemark VARCHAR(256),
	finishingRemark VARCHAR(256),
	createdOn DATETIME,
	createdBy VARCHAR(64), -- -> User
	updatedOn DATETIME,
	updatedBy VARCHAR(64), -- -> User
	startedOn DATETIME,
	startedBy VARCHAR(64), -- -> User
	finishedOn DATETIME,
	finishedBy VARCHAR(64), -- -> User
	assignedTo VARCHAR(64) -- -> User
);