ARG BUN_VERSION=1.1.12
FROM oven/bun:${BUN_VERSION}-slim as base

WORKDIR /app

ENV NODE_ENV="production"

FROM base as build

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential pkg-config python-is-python3

COPY --link bun.lockb package.json ./
RUN bun install --lockfile-only

COPY --link . .

RUN bun build:tailwind

FROM base

COPY --from=build /app /app
COPY --from=build /app/drizzle ./drizzle
COPY --from=build /app/run.sh ./run.sh
COPY --from=build /app/drizzle.config.ts ./drizzle.config.ts

ARG RAILWAY_GIT_COMMIT_SHA
ENV COMMIT_SHA=${RAILWAY_GIT_COMMIT_SHA}

EXPOSE 3000
CMD [ "./run.sh" ]