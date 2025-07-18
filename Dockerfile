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
FROM node:20-alpine AS runner
RUN corepack enable

WORKDIR /app

# 운영에 필요한 파일만 복사
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package.json ./

# ### 여기가 핵심 수정 포인트! ###
# /app 디렉터리 전체의 소유자를 node 유저로 변경합니다.
RUN chown -R node:node /app

# 이제 non-root 유저로 전환해도 파일 쓰기 권한이 있습니다.
USER node

EXPOSE 3000

CMD ["pnpm", "run", "start"]