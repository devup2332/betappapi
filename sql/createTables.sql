CREATE TABLE users(
  id INT(11) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(300) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  email VARCHAR(300) NOT NULL,
  phone VARCHAR(300) NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'user',
  CONSTRAINT chk_role CHECK (role in ('admin','superadmin','user'))
);

ALTER TABLE users
  ADD PRIMARY KEY (id);

ALTER TABLE users
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
