docker-devel:
	docker compose -f docker-compose.dev.yml up
docker-test:
	docker build -t docker-test -f Dockerfile.Test