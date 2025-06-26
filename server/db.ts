import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

// Configure neonConfig to use WebSockets for serverless environments
neonConfig.webSocketConstructor = ws;

// For development, we'll use a mock database URL if none is provided
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://mock:mock@localhost:5432/mock";

// Create a connection pool
export const pool = new Pool({ connectionString: DATABASE_URL });

// Create a drizzle instance with our schema
export const db = drizzle(pool, { schema });