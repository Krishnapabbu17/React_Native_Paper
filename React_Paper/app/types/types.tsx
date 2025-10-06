export interface PlayerStat {
    id: string;
    metric: string;
    value: number;
    icon: string;
}


export interface UserData {
    name: string;
    jerseyNumber: string;
    favoritePosition: string;
    sport: string;
}


export interface NavigateFunction {
    (screenName: string, data?: UserData | {}): void;
}


export interface GatekeeperProps {
    navigate: NavigateFunction;
}


export interface SportDetailProps {
    sport: string;
    userData: UserData;
    navigate: NavigateFunction;
}

