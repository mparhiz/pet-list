import { getOwnerList } from "./owner.service";

describe('OwnerService', () => {
    it("returns a list of two owners", () => {
        const mockOwners = [
            {
                "name":"Bob",
                "gender":"Male",
                "age":23,
                "pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]
            },
            {
                "name":"Jennifer",
                "gender":"Female",
                "age":18,
                "pets":[{"name":"Garfield","type":"Cat"}]
            }
        ];
        
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockOwners)
            })
        );

        getOwnerList().then(data => {
            expect(data.length).toBe(2);
            expect(data[0].name).toBe("Bob");
        });

        global.fetch.mockRestore();
    });
});
