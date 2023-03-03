import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 551,
  site: "smbpumbling",
  domains: ["smbpumbling.deco.site"],
});