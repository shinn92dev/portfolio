# --- STAGE 1: 의존성 설치 ---
# 빌드와 프로덕션에 필요한 모든 의존성을 설치합니다.
FROM node:20-alpine AS dependencies
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
# --prod 플래그 없이 모든 의존성 설치 (빌드 도구는 devDependencies에 있으므로)
RUN pnpm install --frozen-lockfile

# --- STAGE 2: 프로젝트 빌드 ---
# 소스 코드를 기반으로 클라이언트/서버 빌드를 실행합니다.
FROM node:20-alpine AS builder
RUN corepack enable
WORKDIR /app
# 설치된 의존성을 복사
COPY --from=dependencies /app/node_modules ./node_modules
# 소스 코드 전체 복사
COPY . .
# "react-router build" 스크립트 실행
RUN pnpm run build

# --- STAGE 3: 최종 프로덕션 이미지 ---
# 빌드된 서버를 실행하기 위한 최종 단계입니다.
FROM node:20-alpine AS runner
RUN corepack enable
WORKDIR /app

# 운영에 필요한 의존성만 복사합니다.
COPY --from=dependencies /app/node_modules ./node_modules
COPY package.json pnpm-lock.yaml ./

# 빌드 결과물('build' 폴더 전체)을 복사합니다.
COPY --from=builder /app/build ./build

# 보안을 위해 non-root 유저로 실행합니다.
USER node

# react-router-serve가 기본적으로 3000번 포트를 사용합니다.
EXPOSE 3000

# package.json에 정의된 start 스크립트로 서버를 실행합니다.
CMD ["pnpm", "run", "start"]