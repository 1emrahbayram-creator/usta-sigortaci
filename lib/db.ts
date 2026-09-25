import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import os from "node:os";

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  passwordHash: string;
  salt: string;
  createdAt: string;
};

export type Offer = {
  id: string;
  insurerId: string;
  price: number;
  monthly: number;
  highlights: string[];
  bestSeller?: boolean;
};

export type Quote = {
  id: string;
  productSlug: string;
  userId: string | null;
  contact: { name: string; email: string; phone: string };
  details: Record<string, string>;
  offers: Offer[];
  createdAt: string;
};

export type Policy = {
  id: string;
  no: string;
  userId: string;
  productSlug: string;
  insurerId: string;
  price: number;
  startDate: string;
  endDate: string;
  createdAt: string;
};

type DB = {
  users: User[];
  quotes: Quote[];
  policies: Policy[];
};

// Vercel gibi serverless ortamlarda proje dizini salt-okunur; geçici dizine yazılır (veri kalıcı değildir)
const DATA_DIR =
  process.env.DATA_DIR ??
  (process.env.VERCEL ? path.join(os.tmpdir(), "usta-sigortaci") : path.join(process.cwd(), ".data"));
const DB_PATH = path.join(DATA_DIR, "db.json");

export function hashPassword(password: string, salt: string): string {
  return crypto.scryptSync(password, salt, 64).toString("hex");
}

function seed(): DB {
  const salt = crypto.randomBytes(16).toString("hex");
  return {
    users: [
      {
        id: "demo-user",
        name: "Demo Kullanıcı",
        email: "demo@ustasigortaci.com",
        phone: "0530 000 00 00",
        passwordHash: hashPassword("Demo1234", salt),
        salt,
        createdAt: new Date().toISOString(),
      },
    ],
    quotes: [],
    policies: [],
  };
}

function load(): DB {
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, "utf8")) as DB;
  } catch {
    const db = seed();
    save(db);
    return db;
  }
}

function save(db: DB): void {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf8");
}

export function newId(): string {
  return crypto.randomBytes(10).toString("hex");
}

export function findUserByEmail(email: string): User | undefined {
  return load().users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export function findUserById(id: string): User | undefined {
  return load().users.find((u) => u.id === id);
}

export function createUser(input: { name: string; email: string; phone: string; password: string }): User {
  const db = load();
  const salt = crypto.randomBytes(16).toString("hex");
  const user: User = {
    id: newId(),
    name: input.name,
    email: input.email,
    phone: input.phone,
    passwordHash: hashPassword(input.password, salt),
    salt,
    createdAt: new Date().toISOString(),
  };
  db.users.push(user);
  save(db);
  return user;
}

export function verifyPassword(user: User, password: string): boolean {
  const hash = hashPassword(password, user.salt);
  return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(user.passwordHash));
}

export function updateUser(id: string, patch: Partial<Pick<User, "name" | "phone">>): User | undefined {
  const db = load();
  const user = db.users.find((u) => u.id === id);
  if (!user) return undefined;
  Object.assign(user, patch);
  save(db);
  return user;
}

export function addQuote(quote: Quote): void {
  const db = load();
  db.quotes.push(quote);
  save(db);
}

export function getQuote(id: string): Quote | undefined {
  return load().quotes.find((q) => q.id === id);
}

export function getQuotesByUser(userId: string): Quote[] {
  return load()
    .quotes.filter((q) => q.userId === userId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function attachQuoteToUser(quoteId: string, userId: string): void {
  const db = load();
  const quote = db.quotes.find((q) => q.id === quoteId);
  if (quote && !quote.userId) {
    quote.userId = userId;
    save(db);
  }
}

export function addPolicy(policy: Policy): void {
  const db = load();
  db.policies.push(policy);
  save(db);
}

export function getPoliciesByUser(userId: string): Policy[] {
  return load()
    .policies.filter((p) => p.userId === userId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
