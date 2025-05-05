export class TokenManager {
    private static ACCESS_TOKEN_KEY = 'encryptedAccessToken';
    private static REFRESH_TOKEN_KEY = 'encryptedRefreshToken';

    private static encrypt(token: string): string {
        return btoa(token);
    }

    private static decrypt(encryptedToken: string): string {
        return atob(encryptedToken);
    }

    static setAccessToken(accessToken: string): void {
        localStorage.setItem(this.ACCESS_TOKEN_KEY, this.encrypt(accessToken));
    }

    static setRefreshToken(refreshToken: string): void {
        localStorage.setItem(this.REFRESH_TOKEN_KEY, this.encrypt(refreshToken));
    }

    static setTokens(accessToken: string, refreshToken: string): void {
        this.setAccessToken(accessToken);
        this.setRefreshToken(refreshToken);
    }

    static getAccessToken(): string | null {
        const encrypted = localStorage.getItem(this.ACCESS_TOKEN_KEY);
        return encrypted ? this.decrypt(encrypted) : null;
    }

    static getRefreshToken(): string | null {
        const encrypted = localStorage.getItem(this.REFRESH_TOKEN_KEY);
        return encrypted ? this.decrypt(encrypted) : null;
    }

    static clearTokens(): void {
        localStorage.removeItem(this.ACCESS_TOKEN_KEY);
        localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    }
}