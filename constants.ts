
import { Circle, Activity } from './types';

export const MOCK_CIRCLES: Circle[] = [
  {
    id: '1',
    name: 'Q4 Inventory Fund',
    category: 'Small Business',
    contribution: 500,
    frequency: 'monthly',
    duration: 10,
    spotsLeft: 2,
    startDate: 'Nov 1st',
    endDate: 'Aug 1st',
    status: 'Open',
    liquidityProfile: 'Early-Heavy',
    admin: {
      name: 'Sarah J.',
      avatar: 'https://picsum.photos/seed/sarah/100/100',
      role: 'Verified Admin',
      verified: true
    },
    payoutOrder: 'Admin Assigned',
    image: 'https://picsum.photos/seed/biz/600/400',
    membersJoined: 8
  },
  {
    id: '2',
    name: 'Eurotrip 2025',
    category: 'Travel',
    contribution: 200,
    frequency: 'monthly',
    duration: 6,
    status: 'Open',
    startDate: 'Jan 1st',
    endDate: 'June 1st',
    liquidityProfile: 'Balanced',
    admin: {
      name: 'David K.',
      avatar: 'https://picsum.photos/seed/david/100/100',
      role: 'Community Lead',
      verified: true
    },
    payoutOrder: 'Random',
    membersJoined: 4
  },
  {
    id: '3',
    name: 'Rainy Day Safety Net',
    category: 'Emergency Fund',
    contribution: 50,
    frequency: 'weekly',
    duration: 52,
    status: 'Starting Soon',
    startDate: 'Oct 15th',
    endDate: 'Oct 15th',
    liquidityProfile: 'Support-Heavy',
    admin: {
      name: 'Maria G.',
      avatar: 'https://picsum.photos/seed/maria/100/100',
      role: 'Community Lead',
      verified: true,
      goal: 'Home Renovation'
    },
    payoutOrder: 'Admin Assigned',
    image: 'https://picsum.photos/seed/piggy/600/400',
    membersJoined: 45
  }
];

export const MOCK_ACTIVITY: Activity[] = [
  {
    id: 'a1',
    user: 'Sarah Jenkins',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
    type: 'contribution',
    amount: 100,
    date: 'Today',
    time: '2:45 PM',
    verified: true,
    statusText: 'Contribution Received'
  },
  {
    id: 'a2',
    user: 'You',
    type: 'contribution',
    amount: -100,
    date: 'Yesterday',
    time: '9:00 AM',
    verified: true,
    statusText: 'Contribution Sent',
    tag: 'Auto-Pay'
  },
  {
    id: 'summary-1',
    user: 'You',
    type: 'summary',
    date: 'Sept 30',
    verified: true,
    statusText: 'Cycle Completed',
    description: 'You supported 8 rounds before receiving your payout.',
    tag: 'Impact Record'
  },
  {
    id: 'a3',
    user: 'Michael Ross',
    avatar: 'https://picsum.photos/seed/mike/100/100',
    type: 'payout',
    amount: 1000,
    date: 'Sep 15',
    verified: true,
    statusText: 'Payout Released',
    tag: 'Cycle Complete'
  }
];

export const CATEGORIES = ['Budget', 'Duration', 'Short-term', 'Emergency', 'Business'];
