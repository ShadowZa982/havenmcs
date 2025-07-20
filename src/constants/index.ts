// =====================================================
// Server Configuration
// =====================================================

export interface ServerConfig {
  IP: string;
  VERSION: string;
  NAME: string;
}

export const SERVER: ServerConfig = {
  IP: 'havenmc.fun',
  VERSION: '1.8-1.21',
  NAME: 'Nia Eco SMP',
};

// API Configuration
export const API = {
  MCSRVSTAT: 'https://api.mcsrvstat.us/3',
  UPDATE_INTERVAL: 60000, // 1 minute in milliseconds
} as const;

// Voting System
export interface VotingSite {
  name: string;
  url: string;
}

export const VOTING = {
  SITES: [
    {
      name: 'Minecraft Servers',
      url: 'https://minecraftservers.org/vote/675885'
    },
    {
      name: 'Planet Minecraft',
      url: 'https://planetminecraft.com/server/yourserver/vote/'
    },
    {
      name: 'TopG',
      url: 'https://topg.org/minecraft-servers/server-123456/vote'
    }
  ] satisfies VotingSite[],
};
