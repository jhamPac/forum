interface UserProps {
    email: string;
    username: string;
    isEmailVerified?: boolean;
    isAdminUser?: boolean;
    accessToken?: string;
    refreshToken?: string;
    isDeleted?: boolean;
    lastLogin?: Date;
}

export {};
