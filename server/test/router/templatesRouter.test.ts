import { agent as request } from "supertest";

import { createServer } from "../../src/app";
import { expect } from "../expect";
import { Server } from "http";
import { TestUtils } from "../TestUtils";
import { TemplateDTO } from "../../src/dataTransfer/TemplateDTO";

describe("/api/templates", () => {
    let server: Server;

    before(async () => {
        server = createServer();
        const testUtils = new TestUtils();
        await testUtils.MockDataForTests();
    });

    after(() => {
        server.close();
    });

    describe("POST /api/templates", () => {
        function postTemplate(body: any) {
            return request(server).post("/api/templates").send(body);
        }

        const template = {
            name: "test template",
            uri: "https://i.imgflip.com/gk5el.jpg"
        }

        it('should respond with a status 201', async () => {
            const res = await postTemplate(template);
            expect(res.status).to.equal(201);
        });

        it("should return a created template", async () => {
            const res = await postTemplate(template);
            const createdTemplate: TemplateDTO = res.body;

            expect(createdTemplate).to.haveOwnProperty("url");
            expect(createdTemplate).to.haveOwnProperty("name");
            expect(createdTemplate).to.haveOwnProperty("width");
            expect(createdTemplate).to.haveOwnProperty("height");
            expect(createdTemplate).to.haveOwnProperty("mongoId");
        });
    });

    describe("GET /api/templates", () => {
        function getTemplates() {
            return request(server).get('/api/templates');
        }

        it('should respond with a list', async () => {
            const res = await getTemplates();
            expect(res.status).to.equal(200);
            expect(res.body).to.be.array();
        });

        it('should respond with at least one template', async () => {
            const res = await getTemplates();
            const firstTemplate: TemplateDTO = res.body[0];

            expect(firstTemplate).to.haveOwnProperty("url");
            expect(firstTemplate).to.haveOwnProperty("name");
            expect(firstTemplate).to.haveOwnProperty("width");
            expect(firstTemplate).to.haveOwnProperty("height");
            expect(firstTemplate).to.haveOwnProperty("mongoId");
        });
    });
});