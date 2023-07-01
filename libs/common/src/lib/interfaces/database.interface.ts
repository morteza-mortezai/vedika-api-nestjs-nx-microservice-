export interface DatabaseConfig {
    getPostgresHost(): string
    getPostgresPort(): number
    getPostgresUser(): string
    getPostgresPassword(): string
    getPostgresDb(): string
}