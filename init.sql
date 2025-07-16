-- USERS
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    hash_password VARCHAR(255) NOT NULL
);

-- AUDITORIUMS 
CREATE TABLE auditoriums (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    capacity INTEGER NOT NULL,
    seat_layout_json JSONB
);

-- SEATS 
CREATE TABLE seats (
    id SERIAL PRIMARY KEY,
    auditorium_id INTEGER NOT NULL REFERENCES auditoriums(id) ON DELETE CASCADE,
    row_number VARCHAR(10) NOT NULL,
    seat_number VARCHAR(10) NOT NULL,
    type VARCHAR(30) NOT NULL,
    UNIQUE(auditorium_id, row_number, seat_number)
);

-- MOVIES
CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    duration_minutes INTEGER NOT NULL,
    genre VARCHAR(100) NOT NULL,
    description TEXT,
    release_date DATE NOT NULL,
    poster_url VARCHAR(255)
);

-- SHOWTIMES 
CREATE TABLE showtimes (
    id SERIAL PRIMARY KEY,
    movie_id INTEGER NOT NULL REFERENCES movies(id) ON DELETE CASCADE,
    auditorium_id INTEGER NOT NULL REFERENCES auditoriums(id) ON DELETE CASCADE,
    start_datetime TIMESTAMP NOT NULL,
    price NUMERIC(10,2) NOT NULL
);

-- BOOKINGS 
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    booking_datetime TIMESTAMP NOT NULL DEFAULT NOW(),
    total_amount NUMERIC(10,2) NOT NULL,
    status VARCHAR(30) NOT NULL
);

-- TICKETS 
CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    booking_id INTEGER NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    showtime_id INTEGER NOT NULL REFERENCES showtimes(id) ON DELETE CASCADE,
    seat_id INTEGER NOT NULL REFERENCES seats(id) ON DELETE CASCADE,
    price_at_purchase NUMERIC(10,2),
    UNIQUE(showtime_id, seat_id)
);
