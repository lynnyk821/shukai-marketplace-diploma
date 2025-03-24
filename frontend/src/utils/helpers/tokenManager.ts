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
        localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
    }

    static setTokens(accessToken: string, refreshToken: string): void {
        const encryptedAccess = this.encrypt(accessToken);
        const encryptedRefresh = this.encrypt(refreshToken);

        localStorage.setItem(this.ACCESS_TOKEN_KEY, encryptedAccess);
        localStorage.setItem(this.REFRESH_TOKEN_KEY, encryptedRefresh);
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

    static hasTokens(): boolean {
        return !!this.getAccessToken() && !!this.getRefreshToken();
    }
}