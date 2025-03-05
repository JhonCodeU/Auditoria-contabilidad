CREATE TABLE usuario (
    usua_idusws SERIAL PRIMARY KEY,
    usua_idempr INTEGER,
    usua_esttra VARCHAR(50),
    usua_idsesi INTEGER,
    usua_usuari VARCHAR(50),
    usua_contra TEXT
);

select * from usuario