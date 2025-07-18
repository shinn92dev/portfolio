# --- STAGE 1: Base - pnpm 설치 ---
FROM node:20-alpine AS base
RUN corepack enable

# --- STAGE 2: Dependencies - 모든 의존성 설치 ---
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# --- STAGE 3: Build - 프로젝트 빌드 ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# --- STAGE 4: Production - 최종 프로덕션 이미지 ---
FROM node:20-alpine AS runner
RUN corepack enable
WORKDIR /app

# 운영에 필요한 의존성만 복사
COPY --from=deps /app/node_modules ./node_modules
COPY package.json pnpm-lock.yaml ./

### ------------------ THIS IS THE FIX ------------------ ###
# 'dist' 폴더가 아닌 'build' 폴더를 복사합니다.
COPY --from=builder /app/build ./build
### --------------------------------------------------- ###

# non-root 유저로 전환하기 전에 파일 소유권 변경
RUN chown -R node:node /app

# non-root 유저로 전환
USER node
EXPOSE 3000

# start 스크립트로 서버 실행
CMD ["pnpm", "run", "start"]