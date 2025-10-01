export {}

export type Roles = "admin" | "user"

declare global {
    interface CustomJwtSessionClaims {
        metaData: {
            role?: Roles
        }
    }
}
