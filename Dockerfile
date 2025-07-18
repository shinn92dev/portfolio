# --- STAGE 1: 의존성 설치 ---
    FROM node:20-alpine AS deps
    # pnpm 설치를 위해 corepack 활성화
    RUN corepack enable
    
    WORKDIR /app
    # pnpm은 lockfile만으로도 의존성을 가져올 수 있어 효율적
    COPY pnpm-lock.yaml ./
    # --prod 플래그로 운영에 필요한 의존성만 설치
    RUN pnpm fetch --prod
    
    # --- STAGE 2: 소스코드 빌드 ---
    FROM node:20-alpine AS builder
    RUN corepack enable
    
    WORKDIR /app
    # 설치된 의존성을 deps 스테이지에서 복사
    COPY --from=deps /app/node_modules ./node_modules
    # pnpm-lock.yaml과 package.json 복사
    COPY pnpm-lock.yaml package.json ./
    # 나머지 소스코드 복사
    COPY . .
    # 소스코드를 기반으로 앱 빌드
    RUN pnpm run build
    
    # --- STAGE 3: 최종 프로덕션 이미지 ---
    FROM nginx:stable-alpine
    COPY --from=builder /app/dist /usr/share/nginx/html
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]