
dev:
	symfony serve -d

dev-server:
	symfony serve -d
	pnpm run dev-server

pgsql:
	symfony run psql

vars:
	symfony var:export
