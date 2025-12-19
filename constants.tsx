
import { HostingPlan, Addon, Category } from './types';

export const CATEGORIES: { id: Category; name: string; icon: string }[] = [
  { id: 'minecraft', name: 'Minecraft', icon: 'fa-cube' },
  { id: 'samp', name: 'SA-MP', icon: 'fa-car-side' },
  { id: 'palworld', name: 'Palworld', icon: 'fa-paw' },
  { id: 'rust', name: 'Rust', icon: 'fa-radiation' },
  { id: 'ark', name: 'ARK', icon: 'fa-dragon' },
  { id: 'terraria', name: 'Terraria', icon: 'fa-tree' },
  { id: 'valheim', name: 'Valheim', icon: 'fa-shield-halved' },
  { id: 'vps', name: 'VPS Hosting', icon: 'fa-server' },
  { id: 'web', name: 'Web Hosting', icon: 'fa-globe' },
  { id: 'bot', name: 'Bot Hosting', icon: 'fa-robot' },
  { id: 'reseller', name: 'Reseller', icon: 'fa-users-gear' },
];

export const ALL_PLANS: Record<Category, HostingPlan[]> = {
  minecraft: [
    {
      id: 1, name: "Copper Plan", theme: 'copper',
      prices: {
        monthly: { label: "Monthly", inr: 95, usd: 1 },
        quarterly: { label: "Quarterly", inr: 259, usd: 2.72, savingsInr: 26, savingsUsd: 0.28 },
        yearly: { label: "Yearly", inr: 1047, usd: 11.02, savingsInr: 141, savingsUsd: 1.48 }
      },
      specs: { cpu: "EPYC 4344P – 100%", ram: "2 GB DDR5", storage: "12 GB NVMe", ports: 1, backups: 1 }
    },
    {
      id: 2, name: "Iron Plan", theme: 'iron',
      prices: {
        monthly: { label: "Monthly", inr: 285, usd: 3 },
        quarterly: { label: "Quarterly", inr: 779, usd: 8.2, savingsInr: 76, savingsUsd: 0.8 },
        yearly: { label: "Yearly", inr: 3078, usd: 32.4, savingsInr: 342, savingsUsd: 3.6 }
      },
      specs: { cpu: "EPYC 4344P – 180%", ram: "4 GB DDR5", storage: "25 GB NVMe", ports: 2, backups: 2 }
    },
    {
      id: 3, name: "Gold Plan", theme: 'gold', highlight: true,
      prices: {
        monthly: { label: "Monthly", inr: 475, usd: 5 },
        quarterly: { label: "Quarterly", inr: 1283, usd: 13.50, savingsInr: 142, savingsUsd: 1.49 },
        yearly: { label: "Yearly", inr: 5300, usd: 55.78, savingsInr: 400, savingsUsd: 4.2 }
      },
      specs: { cpu: "EPYC 4344P – 250%", ram: "6 GB DDR5", storage: "36 GB NVMe", ports: 3, backups: 3 }
    },
    {
      id: 4, name: "Diamond Plan", theme: 'diamond',
      prices: {
        monthly: { label: "Monthly", inr: 665, usd: 7 },
        quarterly: { label: "Quarterly", inr: 1799, usd: 19.04, savingsInr: 196, savingsUsd: 2.08 },
        yearly: { label: "Yearly", inr: 6499, usd: 68.70, savingsInr: 481, savingsUsd: 5.30 }
      },
      specs: { cpu: "EPYC 4344P – 300%", ram: "8 GB DDR5", storage: "48 GB NVMe", ports: 4, backups: 4 }
    },
    {
      id: 5, name: "Netherite Plan", theme: 'netherite',
      prices: {
        monthly: { label: "Monthly", inr: 950, usd: 10 },
        quarterly: { label: "Quarterly", inr: 2699, usd: 28.50, savingsInr: 151, savingsUsd: 1.58 },
        yearly: { label: "Yearly", inr: 10199, usd: 107.35, savingsInr: 1201, savingsUsd: 12.64 }
      },
      specs: { cpu: "EPYC 4344P – 400%", ram: "12 GB DDR5", storage: "48 GB NVMe", ports: 5, backups: 5 }
    }
  ],
  samp: [
    {
      id: 10, name: "SA-MP Plan 1", theme: 'samp-classic',
      prices: {
        monthly: { label: "Monthly", inr: 59, usd: 0.63 },
        quarterly: { label: "Quarterly", inr: 159, usd: 1.68, savingsInr: 18, savingsUsd: 0.19 },
        yearly: { label: "Yearly", inr: 599, usd: 6.31, savingsInr: 109, savingsUsd: 1.15 }
      },
      specs: { cpu: "EPYC 4344P – 25%", ram: "300 MB DDR5", storage: "1 GB NVMe", ports: 2, backups: 1, slots: 50 }
    },
    {
      id: 11, name: "SA-MP Plan 2", theme: 'samp-classic',
      prices: {
        monthly: { label: "Monthly", inr: 99, usd: 1.05 },
        quarterly: { label: "Quarterly", inr: 259, usd: 2.72, savingsInr: 38, savingsUsd: 0.4 },
        yearly: { label: "Yearly", inr: 999, usd: 10.52, savingsInr: 189, savingsUsd: 1.99 }
      },
      specs: { cpu: "EPYC 4344P – 50%", ram: "512 MB DDR5", storage: "2 GB NVMe", ports: 2, backups: 2, slots: 80 }
    },
    {
      id: 12, name: "SA-MP Plan 3", theme: 'samp-pro', highlight: true,
      prices: {
        monthly: { label: "Monthly", inr: 159, usd: 1.67 },
        quarterly: { label: "Quarterly", inr: 439, usd: 4.62, savingsInr: 58, savingsUsd: 0.61 },
        yearly: { label: "Yearly", inr: 1699, usd: 17.88, savingsInr: 209, savingsUsd: 2.2 }
      },
      specs: { cpu: "EPYC 4344P – 75%", ram: "800 MB DDR5", storage: "3 GB NVMe", ports: 2, backups: 3, slots: 100 }
    },
    {
      id: 13, name: "SA-MP Plan 4", theme: 'samp-pro',
      prices: {
        monthly: { label: "Monthly", inr: 249, usd: 2.62 },
        quarterly: { label: "Quarterly", inr: 699, usd: 7.36, savingsInr: 48, savingsUsd: 0.5 },
        yearly: { label: "Yearly", inr: 2799, usd: 29.46, savingsInr: 189, savingsUsd: 1.99 }
      },
      specs: { cpu: "EPYC 4344P – 100%", ram: "1 GB DDR5", storage: "4 GB NVMe", ports: 2, backups: 4, slots: 150 }
    },
    {
      id: 14, name: "SA-MP Plan 5", theme: 'samp-elite',
      prices: {
        monthly: { label: "Monthly", inr: 399, usd: 4.2 },
        quarterly: { label: "Quarterly", inr: 1099, usd: 11.57, savingsInr: 98, savingsUsd: 1.03 },
        yearly: { label: "Yearly", inr: 4199, usd: 44.2, savingsInr: 589, savingsUsd: 6.2 }
      },
      specs: { cpu: "EPYC 4344P – 150%", ram: "1.5 GB DDR5", storage: "5 GB NVMe", ports: 2, backups: 5, slots: 200 }
    }
  ],
  rust: [
    {
      id: 101, name: "Rust Basic",
      prices: { monthly: { label: "Monthly", inr: 450, usd: 5.4 }, quarterly: { label: "Quarterly", inr: 1200, usd: 14.5 }, yearly: { label: "Yearly", inr: 4500, usd: 54 } },
      specs: { cpu: "EPYC 4344P - 2 Cores", ram: "4 GB DDR5", storage: "40 GB NVMe", ports: 1, backups: 1 }
    },
    {
      id: 102, name: "Rust Pro", highlight: true,
      prices: { monthly: { label: "Monthly", inr: 850, usd: 10.2 }, quarterly: { label: "Quarterly", inr: 2400, usd: 28.8 }, yearly: { label: "Yearly", inr: 8500, usd: 102 } },
      specs: { cpu: "EPYC 4344P - 4 Cores", ram: "8 GB DDR5", storage: "80 GB NVMe", ports: 2, backups: 3 }
    }
  ],
  palworld: [
    {
      id: 201, name: "Pal Explorer",
      prices: { monthly: { label: "Monthly", inr: 950, usd: 11.4 }, quarterly: { label: "Quarterly", inr: 2700, usd: 32.4 }, yearly: { label: "Yearly", inr: 10000, usd: 120 } },
      specs: { cpu: "Epic Performance", ram: "16 GB DDR5", storage: "50 GB NVMe", ports: 1, backups: 5 }
    }
  ],
  vps: [
    {
      id: 301, name: "EPYC 4244P Plan 1",
      prices: { 
        monthly: { label: "Monthly", inr: 599, usd: 6.3 }, 
        quarterly: { label: "Quarterly", inr: 1617, usd: 17, savingsInr: 180 }, 
        yearly: { label: "Yearly", inr: 5750, usd: 60, savingsInr: 1438 } 
      },
      specs: { cpu: "2 vCores EPYC 4244P (5.1GHz)", ram: "4GB DDR5 ECC 5200MHz", storage: "20GB Gen 4 NVMe (Soft RAID 2)", ports: 1, backups: 1 }
    },
    {
      id: 302, name: "EPYC 4244P Plan 2",
      prices: { 
        monthly: { label: "Monthly", inr: 899, usd: 9.46 }, 
        quarterly: { label: "Quarterly", inr: 2427, usd: 25.5, savingsInr: 270 }, 
        yearly: { label: "Yearly", inr: 8630, usd: 90.8, savingsInr: 2158 } 
      },
      specs: { cpu: "3 vCores EPYC 4244P (5.1GHz)", ram: "8GB DDR5 ECC 5200MHz", storage: "60GB Gen 4 NVMe (Soft RAID 2)", ports: 1, backups: 2 }
    },
    {
      id: 303, name: "EPYC 4244P Plan 3",
      prices: { 
        monthly: { label: "Monthly", inr: 1699, usd: 17.88 }, 
        quarterly: { label: "Quarterly", inr: 4587, usd: 48.3, savingsInr: 510 }, 
        yearly: { label: "Yearly", inr: 16310, usd: 171.7, savingsInr: 4078 } 
      },
      specs: { cpu: "4 vCores EPYC 4244P (5.1GHz)", ram: "16 GB DDR5 ECC 5200MHz", storage: "80GB Gen 4 NVMe (Soft RAID 2)", ports: 1, backups: 3 }
    },
    {
      id: 304, name: "EPYC 4244P Plan 4", highlight: true,
      prices: { 
        monthly: { label: "Monthly", inr: 2499, usd: 26.3 }, 
        quarterly: { label: "Quarterly", inr: 6747, usd: 71, savingsInr: 750 }, 
        yearly: { label: "Yearly", inr: 23990, usd: 252.5, savingsInr: 5998 } 
      },
      specs: { cpu: "5 vCores EPYC 4244P (5.1GHz)", ram: "24 GB DDR5 ECC 5200MHz", storage: "100GB Gen 4 NVMe (Soft RAID 2)", ports: 1, backups: 5 }
    },
    {
      id: 305, name: "EPYC 4244P Plan 5",
      prices: { 
        monthly: { label: "Monthly", inr: 2999, usd: 31.57 }, 
        quarterly: { label: "Quarterly", inr: 8097, usd: 85.2, savingsInr: 900 }, 
        yearly: { label: "Yearly", inr: 28790, usd: 303, savingsInr: 7198 } 
      },
      specs: { cpu: "6 vCores EPYC 4244P (5.1GHz)", ram: "32 GB DDR5 ECC 5200MHz", storage: "120GB Gen 4 NVMe (Soft RAID 2)", ports: 1, backups: 5 }
    }
  ],
  bot: [
    {
      id: 801, name: "Bot Plan 1",
      prices: { 
        monthly: { label: "Monthly", inr: 30, usd: 0.35 }, 
        quarterly: { label: "Quarterly", inr: 80, usd: 0.95, savingsInr: 10 }, 
        yearly: { label: "Yearly", inr: 300, usd: 3.5, savingsInr: 60 } 
      },
      specs: { cpu: "EPYC – 25% vCore", ram: "400 MB DDR5 ECC", storage: "1 GB NVMe Gen4", ports: 1, backups: 1 }
    },
    {
      id: 802, name: "Bot Plan 2",
      prices: { 
        monthly: { label: "Monthly", inr: 70, usd: 0.83 }, 
        quarterly: { label: "Quarterly", inr: 190, usd: 2.25, savingsInr: 20 }, 
        yearly: { label: "Yearly", inr: 700, usd: 8.3, savingsInr: 140 } 
      },
      specs: { cpu: "EPYC – 50% vCore", ram: "1 GB DDR5 ECC", storage: "2 GB NVMe Gen4", ports: 1, backups: 1 }
    },
    {
      id: 803, name: "Bot Plan 3", highlight: true,
      prices: { 
        monthly: { label: "Monthly", inr: 120, usd: 1.42 }, 
        quarterly: { label: "Quarterly", inr: 320, usd: 3.8, savingsInr: 40 }, 
        yearly: { label: "Yearly", inr: 1200, usd: 14.2, savingsInr: 240 } 
      },
      specs: { cpu: "EPYC – 75% vCore", ram: "1.5 GB DDR5 ECC", storage: "3 GB NVMe Gen4", ports: 1, backups: 1 }
    },
    {
      id: 804, name: "Bot Plan 4",
      prices: { 
        monthly: { label: "Monthly", inr: 160, usd: 1.9 }, 
        quarterly: { label: "Quarterly", inr: 430, usd: 5.1, savingsInr: 50 }, 
        yearly: { label: "Yearly", inr: 1600, usd: 19, savingsInr: 320 } 
      },
      specs: { cpu: "EPYC – 100% vCore", ram: "2 GB DDR5 ECC", storage: "5 GB NVMe Gen4", ports: 1, backups: 1 }
    }
  ],
  ark: [{ id: 401, name: "ARK Starter", prices: { monthly: { label: "Monthly", inr: 800, usd: 9.6 }, quarterly: { label: "Quarterly", inr: 2200, usd: 26.4 }, yearly: { label: "Yearly", inr: 8000, usd: 96 } }, specs: { cpu: "Standard", ram: "8 GB", storage: "50 GB", ports: 1, backups: 1 } }],
  terraria: [{ id: 501, name: "Terraria Small", prices: { monthly: { label: "Monthly", inr: 150, usd: 1.8 }, quarterly: { label: "Quarterly", inr: 400, usd: 4.8 }, yearly: { label: "Yearly", inr: 1500, usd: 18 } }, specs: { cpu: "Standard", ram: "2 GB", storage: "10 GB", ports: 1, backups: 1 } }],
  valheim: [{ id: 601, name: "Valheim Basic", prices: { monthly: { label: "Monthly", inr: 500, usd: 6 }, quarterly: { label: "Quarterly", inr: 1400, usd: 16.8 }, yearly: { label: "Yearly", inr: 5000, usd: 60 } }, specs: { cpu: "Standard", ram: "6 GB", storage: "30 GB", ports: 1, backups: 1 } }],
  web: [{ id: 701, name: "Web Starter", prices: { monthly: { label: "Monthly", inr: 99, usd: 1.2 }, quarterly: { label: "Quarterly", inr: 280, usd: 3.4 }, yearly: { label: "Yearly", inr: 999, usd: 12 } }, specs: { cpu: "Shared", ram: "1 GB", storage: "5 GB", ports: 1, backups: 1 } }],
  reseller: [{ id: 901, name: "Reseller 1", prices: { monthly: { label: "Monthly", inr: 1500, usd: 18 }, quarterly: { label: "Quarterly", inr: 4200, usd: 50.4 }, yearly: { label: "Yearly", inr: 15000, usd: 180 } }, specs: { cpu: "Wholesale", ram: "32 GB Pool", storage: "200 GB", ports: 10, backups: 50 } }],
};

export const UPSELL_ADDONS: Addon[] = [
  // General Addons
  { name: "Priority Support", price: "₹39/mo", icon: "fa-ticket", description: "24/7 Call & Tickets" },
  { name: "Script Installation", price: "₹149", icon: "fa-code", description: "One-time setup" },
  { name: "Dedicated IP", price: "₹250/mo", icon: "fa-wifi", description: "Fixed static IP" },
  { name: "Custom Subdomain", price: "₹29/mo", icon: "fa-globe", description: "Free with Yearly plans" },
  
  // Specific to SA-MP
  { name: "Extra Player Slots", price: "₹15/mo", icon: "fa-user-plus", description: "+10 Slots", category: ['samp'] },
  { name: "Extra Storage (SAMP)", price: "₹19/mo", icon: "fa-hard-drive", description: "+500 MB NVME", category: ['samp'] },
  { name: "Extra Backups", price: "₹10/mo", icon: "fa-server", description: "Per Backup" },

  // General/Minecraft
  { name: "Extra RAM", price: "₹89/mo", icon: "fa-memory", description: "+1 GB", category: ['minecraft', 'palworld', 'rust'] },
  { name: "Extra Storage", price: "₹49/mo", icon: "fa-hard-drive", description: "+10 GB NVME SSD", category: ['minecraft', 'vps'] },
  { name: "Extra CPU", price: "₹79/mo", icon: "fa-microchip", description: "+1 vCore" },
];

export const DISCORD_URL = "https://discord.gg/2mjpaZ6bfK";
export const WEB_DEV_DISCORD_URL = "https://discord.gg/MS4TRNUyes";
