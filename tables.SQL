CREATE TABLE player(
    id serial PRIMARY KEY, 
    user_name text NOT NULL, 
    xp int DEFAULT 0, 
    level int DEFAULT 1, 
    max_stage int DEFAULT 1
    );

CREATE TABLE all_badges(
    id serial PRIMARY KEY,
    badge_name text NOT NULL,
    stage_got int NOT NULL
)

CREATE TABLE all_titles(
    id serial PRIMARY KEY,
    title_name text NOT NULL,
    level_got int NOT NULL
)

CREATE TABLE all_stages(
    id serial PRIMARY KEY,
    stage_name text NOT NULL,
    stage_theme text NOT NULL
)

CREATE TABLE badges(
    id int FOREIGN KEY REFERENCES all_badges(id),
    player_id int FOREIGN KEY REFERENCES player(id)
)

CREATE TABLE titles(
    id serial FOREIGN KEY REFERENCES all_titles(id),
    player_id int FOREIGN KEY REFERENCES player(id)
)