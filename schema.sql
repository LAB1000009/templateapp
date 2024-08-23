
CREATE TABLE sap_capire_bookshop_Books (
  createdAt TIMESTAMP_TEXT,
  createdBy NVARCHAR(255),
  modifiedAt TIMESTAMP_TEXT,
  modifiedBy NVARCHAR(255),
  ID INTEGER NOT NULL,
  title NVARCHAR(111),
  descr NVARCHAR(1111),
  author_ID INTEGER,
  genre_ID INTEGER,
  stock INTEGER,
  price DECIMAL,
  currency_code NVARCHAR(3),
  image BLOB,
  PRIMARY KEY(ID)
);

CREATE TABLE sap_capire_bookshop_Authors (
  createdAt TIMESTAMP_TEXT,
  createdBy NVARCHAR(255),
  modifiedAt TIMESTAMP_TEXT,
  modifiedBy NVARCHAR(255),
  ID INTEGER NOT NULL,
  name NVARCHAR(111),
  dateOfBirth DATE_TEXT,
  dateOfDeath DATE_TEXT,
  placeOfBirth NVARCHAR(255),
  placeOfDeath NVARCHAR(255),
  PRIMARY KEY(ID)
);

CREATE TABLE sap_capire_bookshop_Genres (
  name NVARCHAR(255),
  descr NVARCHAR(1000),
  ID INTEGER NOT NULL,
  parent_ID INTEGER,
  PRIMARY KEY(ID)
);

CREATE TABLE sap_common_Currencies (
  name NVARCHAR(255),
  descr NVARCHAR(1000),
  code NVARCHAR(3) NOT NULL,
  symbol NVARCHAR(5),
  minorUnit SMALLINT,
  PRIMARY KEY(code)
);

CREATE TABLE sap_capire_bookshop_Books_texts (
  locale NVARCHAR(14) NOT NULL,
  ID INTEGER NOT NULL,
  title NVARCHAR(111),
  descr NVARCHAR(1111),
  PRIMARY KEY(locale, ID)
);

CREATE TABLE sap_capire_bookshop_Genres_texts (
  locale NVARCHAR(14) NOT NULL,
  name NVARCHAR(255),
  descr NVARCHAR(1000),
  ID INTEGER NOT NULL,
  PRIMARY KEY(locale, ID)
);

CREATE TABLE sap_common_Currencies_texts (
  locale NVARCHAR(14) NOT NULL,
  name NVARCHAR(255),
  descr NVARCHAR(1000),
  code NVARCHAR(3) NOT NULL,
  PRIMARY KEY(locale, code)
);

CREATE VIEW CatalogService_Books AS SELECT
  Books_0.createdAt,
  Books_0.modifiedAt,
  Books_0.ID,
  Books_0.title,
  Books_0.descr,
  author_1.name AS author,
  Books_0.genre_ID,
  Books_0.stock,
  Books_0.price,
  Books_0.currency_code,
  Books_0.image
FROM (sap_capire_bookshop_Books AS Books_0 LEFT JOIN sap_capire_bookshop_Authors AS author_1 ON Books_0.author_ID = author_1.ID);

CREATE VIEW CatalogService_Genres AS SELECT
  Genres_0.name,
  Genres_0.descr,
  Genres_0.ID,
  Genres_0.parent_ID
FROM sap_capire_bookshop_Genres AS Genres_0;

CREATE VIEW CatalogService_Currencies AS SELECT
  Currencies_0.name,
  Currencies_0.descr,
  Currencies_0.code,
  Currencies_0.symbol,
  Currencies_0.minorUnit
FROM sap_common_Currencies AS Currencies_0;

CREATE VIEW CatalogService_Books_texts AS SELECT
  texts_0.locale,
  texts_0.ID,
  texts_0.title,
  texts_0.descr
FROM sap_capire_bookshop_Books_texts AS texts_0;

CREATE VIEW CatalogService_Genres_texts AS SELECT
  texts_0.locale,
  texts_0.name,
  texts_0.descr,
  texts_0.ID
FROM sap_capire_bookshop_Genres_texts AS texts_0;

CREATE VIEW CatalogService_Currencies_texts AS SELECT
  texts_0.locale,
  texts_0.name,
  texts_0.descr,
  texts_0.code
FROM sap_common_Currencies_texts AS texts_0;

CREATE VIEW localized_sap_capire_bookshop_Books AS SELECT
  L_0.createdAt,
  L_0.createdBy,
  L_0.modifiedAt,
  L_0.modifiedBy,
  L_0.ID,
  coalesce(localized_1.title, L_0.title) AS title,
  coalesce(localized_1.descr, L_0.descr) AS descr,
  L_0.author_ID,
  L_0.genre_ID,
  L_0.stock,
  L_0.price,
  L_0.currency_code,
  L_0.image
FROM (sap_capire_bookshop_Books AS L_0 LEFT JOIN sap_capire_bookshop_Books_texts AS localized_1 ON localized_1.ID = L_0.ID AND localized_1.locale = session_context( '$user.locale' ));

CREATE VIEW localized_sap_capire_bookshop_Genres AS SELECT
  coalesce(localized_1.name, L_0.name) AS name,
  coalesce(localized_1.descr, L_0.descr) AS descr,
  L_0.ID,
  L_0.parent_ID
FROM (sap_capire_bookshop_Genres AS L_0 LEFT JOIN sap_capire_bookshop_Genres_texts AS localized_1 ON localized_1.ID = L_0.ID AND localized_1.locale = session_context( '$user.locale' ));

CREATE VIEW localized_sap_common_Currencies AS SELECT
  coalesce(localized_1.name, L_0.name) AS name,
  coalesce(localized_1.descr, L_0.descr) AS descr,
  L_0.code,
  L_0.symbol,
  L_0.minorUnit
FROM (sap_common_Currencies AS L_0 LEFT JOIN sap_common_Currencies_texts AS localized_1 ON localized_1.code = L_0.code AND localized_1.locale = session_context( '$user.locale' ));

CREATE VIEW CatalogService_ListOfBooks AS SELECT
  Books_0.createdAt,
  Books_0.modifiedAt,
  Books_0.ID,
  Books_0.title,
  Books_0.author,
  Books_0.genre_ID,
  Books_0.stock,
  Books_0.price,
  Books_0.currency_code,
  Books_0.image
FROM CatalogService_Books AS Books_0;

CREATE VIEW localized_CatalogService_Books AS SELECT
  Books_0.createdAt,
  Books_0.modifiedAt,
  Books_0.ID,
  Books_0.title,
  Books_0.descr,
  author_1.name AS author,
  Books_0.genre_ID,
  Books_0.stock,
  Books_0.price,
  Books_0.currency_code,
  Books_0.image
FROM (localized_sap_capire_bookshop_Books AS Books_0 LEFT JOIN sap_capire_bookshop_Authors AS author_1 ON Books_0.author_ID = author_1.ID);

CREATE VIEW localized_CatalogService_Genres AS SELECT
  Genres_0.name,
  Genres_0.descr,
  Genres_0.ID,
  Genres_0.parent_ID
FROM localized_sap_capire_bookshop_Genres AS Genres_0;

CREATE VIEW localized_CatalogService_Currencies AS SELECT
  Currencies_0.name,
  Currencies_0.descr,
  Currencies_0.code,
  Currencies_0.symbol,
  Currencies_0.minorUnit
FROM localized_sap_common_Currencies AS Currencies_0;

CREATE VIEW localized_CatalogService_ListOfBooks AS SELECT
  Books_0.createdAt,
  Books_0.modifiedAt,
  Books_0.ID,
  Books_0.title,
  Books_0.author,
  Books_0.genre_ID,
  Books_0.stock,
  Books_0.price,
  Books_0.currency_code,
  Books_0.image
FROM localized_CatalogService_Books AS Books_0;

