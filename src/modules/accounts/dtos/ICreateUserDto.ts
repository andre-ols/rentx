interface ICreateUserDto {
    name: string;
    username: string;
    password: string;
    email: string;
    driverLicense: string;
    isAdmin: boolean;
}

export { ICreateUserDto }