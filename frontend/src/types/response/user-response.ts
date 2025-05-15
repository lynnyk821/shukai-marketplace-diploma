import { UserRole } from "../common/user-role.ts";

export type UserResponse = {
    id: number,
    image: string,
    role: UserRole,
}