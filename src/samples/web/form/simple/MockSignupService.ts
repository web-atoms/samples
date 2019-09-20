import SignupService, { IKeyValue, IUser } from "./SignupService";

export default class MockSignupService extends SignupService {

    public async signup(
        user: IUser): Promise<string> {
        if (user.emailAddress === "exists@exists.com") {
            return this.sendResult(null, "Email address already exists");
        }
        return this.sendResult(user);
    }

    public async states(
        country: string): Promise<IKeyValue[]> {
        return this.sendResult(
            country === "IN" ? [
                { label: "Maharashtra", value: "MH"},
                { label: "Gujarat", value: "GJ"},
                { label: "Punjab", value: "PB"}
            ] : [
                { label: "State1", value: "State1"},
                { label: "State2", value: "State2"},
                { label: "State3", value: "State3"},
                { label: "State4", value: "State4"}
            ]);
    }

    public async countries(): Promise<IKeyValue[]> {
        return this.sendResult([
            { label: "India", value: "IN" },
            { label: "Country1", value: "Country1" },
            { label: "Country2", value: "Country2" }
        ]);
    }
}
