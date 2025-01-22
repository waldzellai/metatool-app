import { McpServerStatus } from '@/db/schema';

export interface McpServer {
  uuid: string;
  name: string;
  created_at: Date;
  description: string | null;
  command: string;
  args: string[];
  env: {
    [key: string]: string;
  };
  profile_uuid: string;
  status: McpServerStatus;
}
