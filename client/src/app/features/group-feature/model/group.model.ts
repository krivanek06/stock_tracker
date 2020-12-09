export interface GroupModel {
    groupName: string;
    description: string;
    owner: any;
    managers: any[];
    members: [];
    pendingUsers: [];
    invitationSent: [];
    portfolioTotal: number;
    latestTransactions: any[];
    portfolioChange: any[];
    portfolioGrowth: any[];
}
