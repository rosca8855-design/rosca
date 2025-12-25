
export type ScreenType = 'explore' | 'detail' | 'join' | 'timeline' | 'members' | 'profile' | 'my-commitment';

export type LiquidityProfile = 'Early-Heavy' | 'Balanced' | 'Support-Heavy';

export interface Circle {
  id: string;
  name: string;
  category: string;
  contribution: number;
  frequency: 'weekly' | 'monthly';
  duration: number;
  spotsLeft?: number;
  startDate: string;
  endDate: string;
  status: 'Open' | 'Starting Soon' | 'In Progress';
  liquidityProfile: LiquidityProfile;
  admin: {
    name: string;
    avatar: string;
    role: string;
    verified: boolean;
    goal?: string;
  };
  payoutOrder: 'Admin Assigned' | 'Bidding' | 'Random';
  image?: string;
  membersJoined: number;
}

export interface Activity {
  id: string;
  user: string;
  avatar?: string;
  type: 'contribution' | 'payout' | 'event' | 'summary';
  amount?: number;
  date: string;
  time?: string;
  verified: boolean;
  statusText: string;
  tag?: string;
  description?: string;
}

export interface UserProfile {
  name: string;
  avatar: string;
  memberSince: string;
  stats: {
    circlesCompleted: number;
    onTimeRate: number;
    supportRoundsTotal: number;
    latePayoutsCount: number;
  };
}
