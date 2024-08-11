-- name: GetVisitorByIp :one
SELECT * FROM visitors
WHERE
    ip = $1
LIMIT
    1;

-- name: GetVisitorById :one
SELECT * FROM visitors
WHERE
    id = $1
LIMIT
    1;

-- name: CreateVisitor :one
INSERT INTO visitors
    (ip)
VALUES
    ($1)
RETURNING
    *;

-- name: CreateBattery :exec
INSERT INTO batteries
    (node_id, level, charging_time, discharging_time, charging, updated_at)
VALUES
    ($1, $2, $3, $4, $5, now());

-- name: UpdateBattery :exec
UPDATE batteries
SET
    level = coalesce(sqlc.narg('level'), level),
    charging_time = coalesce(sqlc.narg('charging_time'), charging_time),
    discharging_time = coalesce(sqlc.narg('discharging_time'), discharging_time),
    charging = coalesce(sqlc.narg('charging'), charging),
    updated_at = sqlc.arg('id')
WHERE
    node_id = sqlc.arg('node_id');

-- name: GetNodeById :one
SELECT * FROM nodes
WHERE
    id = $1
LIMIT
    1;

-- name: GetNodeByKey :one
SELECT * FROM nodes
WHERE
    key = $1
LIMIT
    1;

-- name: GetEntryLogByNodeId :one
SELECT DISTINCT ON (node_id)
    *
FROM
    entry_logs
WHERE
    node_id = $1
ORDER BY
    created_at DESC
LIMIT
    1;

-- name: CreateEntryLog :exec
INSERT INTO entry_logs
    (node_id, visitor_id, type)
VALUES
    ($1, $2, $3);

-- name: CreateExhibitionLog :exec
INSERT INTO exhibition_logs
    (node_id, visitor_id)
VALUES
    ($1, $2);

-- name: CreateFoodStallLog :exec
INSERT INTO food_stall_logs
    (node_id, visitor_id, quantity)
VALUES
    ($1, $2, $3);