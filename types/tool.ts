export interface Tool {
  uuid: string;
  name: string;
  description: string | null;
  toolSchema: {
    inputSchema: {
      type: 'object';
      properties?: Record<string, any>;
    };
    [key: string]: any;
  };
  created_at: Date;
  mcp_server_uuid: string;
}
