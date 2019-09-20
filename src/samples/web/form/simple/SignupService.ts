import { CancelToken } from "web-atoms-core/dist/core/types";
import DISingleton from "web-atoms-core/dist/di/DISingleton";
import { BaseService, Body, Get, Path, Post } from "web-atoms-core/dist/services/http/RestService";

export interface IUser {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    passwordAgain: string;
    country: string;
    state?: string;
}

export interface IKeyValue {
    label: string;
    value: string;
}

@DISingleton({
    mock: "./MockSignupService"
})
export default class SignupService extends BaseService {

    @Post("/user/signup")
    public async signup(
        @Body user: IUser): Promise<string> {
        return null;
    }

    @Get("/user/locations/{country}/states")
    public async states(
        @Path("country") country: string,
        ct: CancelToken): Promise<IKeyValue[]> {
        return null;
    }

    @Get("/user/locations/countries")
    public async countries(): Promise<IKeyValue[]> {
        return null;
    }
}
