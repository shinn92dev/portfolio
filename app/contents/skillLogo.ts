import react from "@/assets/skill_logos/react.webp";
import c from "@/assets/skill_logos/c.png";
import clerk from "@/assets/skill_logos/clerk.png";
import digitalOcean from "@/assets/skill_logos/digitalocean.png";
import django from "@/assets/skill_logos/django.png";
import docker from "@/assets/skill_logos/docker.webp";
import express from "@/assets/skill_logos/express.png";
import fastApi from "@/assets/skill_logos/fastapi.png";
import firebase from "@/assets/skill_logos/firebase.png";
import firebaseAuth from "@/assets/skill_logos/firebaseauthentication.webp";
import flask from "@/assets/skill_logos/flask.png";
import firestore from "@/assets/skill_logos/firestore.png";
import git from "@/assets/skill_logos/git.png";
import github from "@/assets/skill_logos/github.png";
import html from "@/assets/skill_logos/html.png";
import java from "@/assets/skill_logos/java.webp";
import js from "@/assets/skill_logos/js.png";
import jwt from "@/assets/skill_logos/jwt.png";
import mongo from "@/assets/skill_logos/mongodb.webp";
import mysql from "@/assets/skill_logos/mysql.png";
import nextjs from "@/assets/skill_logos/nextjs.png";
import nginx from "@/assets/skill_logos/nginx.webp";
import oauth from "@/assets/skill_logos/oauth.svg";
import postgresql from "@/assets/skill_logos/postgresql.webp";
import python from "@/assets/skill_logos/python.png";
import prisma from "@/assets/skill_logos/prisma.png";
import reactRouter from "@/assets/skill_logos/reactrouter.png";
import scss from "@/assets/skill_logos/scss.png";
import shadcn from "@/assets/skill_logos/shadcn.png";
import sql from "@/assets/skill_logos/sql.png";
import sqlAlchemy from "@/assets/skill_logos/sqlalchemy.png";
import sqlite from "@/assets/skill_logos/sqlite.png";
import ssl from "@/assets/skill_logos/ssl.png";
import strapi from "@/assets/skill_logos/strapi.png";
import tailwind from "@/assets/skill_logos/tailwindcss.png";
import ts from "@/assets/skill_logos/ts.png";
import ubuntu from "@/assets/skill_logos/ubuntu.png";
import vercel from "@/assets/skill_logos/vercel.webp";
import css from "@/assets/skill_logos/css.png";
const SKILL_LOGOS: { [key: string]: string } = {
    // Programming Language
    javascript: js,
    typescript: ts,
    python: python,
    java: java,
    c: c,
    html: html,
    css: css,
    scss: scss,
    sql: sql,

    // Frontend
    reactjs: react,
    reactnative: react,
    nextjs: nextjs,
    reactrouter: reactRouter,
    shadcnui: shadcn,
    tailwindcss: tailwind,

    // Backend
    fastapi: fastApi,
    strapi: strapi,
    expressjs: express,
    django: django,
    flask: flask,
    firebase: firebase,

    // Authentication / Security
    clerk: clerk,
    firebaseauthentication: firebaseAuth,
    jwt: jwt,
    oauth: oauth,
    ssl: ssl,

    // Database
    mysql: mysql,
    postgresql: postgresql,
    sqlite: sqlite,
    mongodb: mongo,
    firestore: firestore,
    prisma: prisma,
    sqlalchemy: sqlAlchemy,

    // DevOps / Infra
    docker: docker,
    nginx: nginx,
    ubuntuserver: ubuntu,
    gitgitcli: git,
    github: github,
    digitalocean: digitalOcean,
    vercel: vercel,
};

export default SKILL_LOGOS;
