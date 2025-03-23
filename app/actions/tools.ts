'use server';

import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { toolsTable } from '@/db/schema';
import { Tool } from '@/types/tool';

export async function getToolsByMcpServerUuid(
  mcpServerUuid: string
): Promise<Tool[]> {
  const tools = await db
    .select()
    .from(toolsTable)
    .where(eq(toolsTable.mcp_server_uuid, mcpServerUuid))
    .orderBy(toolsTable.name);

  return tools as Tool[];
}
