// ─── Shared TypeScript types ───────────────────────────────────────────────

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export interface StatCard {
  title: string;
  value: string | number;
  change: string;
  positive: boolean;
  unit?: string;
}

export interface ActivityItem {
  id: string;
  type: 'disease' | 'soil' | 'crop' | 'market' | 'info';
  message: string;
  time: string;
}

export interface InsightItem {
  id: string;
  title: string;
  description: string;
  category: string;
}
