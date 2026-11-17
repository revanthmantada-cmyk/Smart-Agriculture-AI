// Demo data — clearly labelled, never presented as real AI predictions
export const cropHealthData = [
  { month: 'Jun', health: 72 },
  { month: 'Jul', health: 78 },
  { month: 'Aug', health: 65 },
  { month: 'Sep', health: 82 },
  { month: 'Oct', health: 88 },
  { month: 'Nov', health: 84 },
];

export const soilHealthData = [
  { name: 'Nitrogen', value: 68, fullMark: 100 },
  { name: 'Phosphorus', value: 55, fullMark: 100 },
  { name: 'Potassium', value: 74, fullMark: 100 },
  { name: 'pH Level', value: 70, fullMark: 100 },
  { name: 'Organic', value: 60, fullMark: 100 },
];

export const diseaseDetectionData = [
  { month: 'Jun', detected: 3, resolved: 2 },
  { month: 'Jul', detected: 5, resolved: 4 },
  { month: 'Aug', detected: 7, resolved: 5 },
  { month: 'Sep', detected: 4, resolved: 4 },
  { month: 'Oct', detected: 2, resolved: 2 },
  { month: 'Nov', detected: 1, resolved: 1 },
];

export const marketPriceData = [
  { crop: 'Rice', price: 2100, change: 5.2 },
  { crop: 'Wheat', price: 1850, change: -1.4 },
  { crop: 'Maize', price: 1600, change: 3.8 },
  { crop: 'Soybean', price: 4200, change: 2.1 },
  { crop: 'Cotton', price: 6500, change: -0.8 },
];

export const recentActivity = [
  {
    id: '1',
    type: 'disease' as const,
    message: 'Potential leaf blight detected on Field A — connect AI module to analyse.',
    time: '2 hours ago',
  },
  {
    id: '2',
    type: 'soil' as const,
    message: 'Soil sample submitted for Field B — awaiting lab result upload.',
    time: '5 hours ago',
  },
  {
    id: '3',
    type: 'crop' as const,
    message: 'Crop recommendation module ready — connect backend to generate suggestions.',
    time: '1 day ago',
  },
  {
    id: '4',
    type: 'market' as const,
    message: 'Rice price rose by 5.2% this week (demo data — connect market API for live prices).',
    time: '1 day ago',
  },
  {
    id: '5',
    type: 'info' as const,
    message: 'Dashboard configured. Backend health-check: OK.',
    time: '2 days ago',
  },
];

export const insights = [
  {
    id: '1',
    title: 'Optimal Irrigation Window',
    description:
      'Based on typical seasonal patterns, early morning irrigation reduces evaporation losses by up to 30%.',
    category: 'Water Management',
  },
  {
    id: '2',
    title: 'Soil pH Advisory',
    description:
      'Most crops thrive at pH 6.0–7.0. Regular lime or sulphur applications can correct soil acidity or alkalinity.',
    category: 'Soil Health',
  },
  {
    id: '3',
    title: 'Pest-Resistant Varieties',
    description:
      'Connect the AI Disease Detection module to receive crop-variety recommendations tailored to your field data.',
    category: 'Crop Protection',
  },
];
