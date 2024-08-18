CREATE TYPE node_type AS ENUM ('ENTRY', 'FOODSTALL', 'EXHIBITION');
-- Node table
CREATE TABLE nodes (
    id BIGSERIAL PRIMARY KEY,
    key VARCHAR(255) UNIQUE,
    name VARCHAR(255) NOT NULL,
    type node_type NOT NULL,
    price INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Battery table
CREATE TABLE batteries (
    id BIGSERIAL PRIMARY KEY,
    node_id BIGINT,
    level INTEGER,
    charging_time INTEGER,
    discharging_time INTEGER,
    charging BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (node_id) REFERENCES nodes(id) ON DELETE RESTRICT ON UPDATE CASCADE
);
-- Visitor table
CREATE TABLE visitors (
    id BIGSERIAL PRIMARY KEY,
    quantity INTEGER NOT NULL DEFAULT 1,
    random INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip INET UNIQUE NOT NULL
);
-- Student table
CREATE TABLE students (
    id BIGSERIAL PRIMARY KEY,
    visitor_id BIGINT UNIQUE,
    grade INTEGER NOT NULL,
    class INTEGER NOT NULL,
    student_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (visitor_id) REFERENCES visitors(id) ON DELETE RESTRICT ON
        UPDATE CASCADE
);
CREATE TYPE entry_logs_type AS ENUM ('ENTERED', 'LEFT');
-- EntryLog table
CREATE TABLE entry_logs (
    id BIGSERIAL PRIMARY KEY,
    node_id BIGINT,
    visitor_id BIGINT,
    TYPE entry_logs_type NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (node_id) REFERENCES nodes(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (visitor_id) REFERENCES visitors(id) ON DELETE RESTRICT ON
        UPDATE CASCADE
);
-- FoodStallLog table
CREATE TABLE food_stall_logs (
    id BIGSERIAL PRIMARY KEY,
    node_id BIGINT,
    visitor_id BIGINT,
    quantity INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (node_id) REFERENCES nodes(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (visitor_id) REFERENCES visitors(id) ON DELETE RESTRICT ON
        UPDATE CASCADE
);
-- ExhibitionLog table
CREATE TABLE exhibition_logs (
    id BIGSERIAL PRIMARY KEY,
    node_id BIGINT,
    visitor_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (node_id) REFERENCES nodes(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (visitor_id) REFERENCES visitors(id) ON DELETE RESTRICT ON
        UPDATE CASCADE
);