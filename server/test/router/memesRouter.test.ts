import { agent as request } from "supertest";

import { createServer } from "../../src/app";
import { expect } from "../expect";
import { Server } from "http";
import { TestUtils } from "../TestUtils";
import { MemeDTO } from "../../src/dataTransfer/MemeDTO";


describe("/api/memes", () => {
    let server: Server;

    before(async () => {
        server = createServer();
        await TestUtils.scrubDatabase();
    });

    after(() => {
        server.close();
    });

    describe("POST /api/memes", () => {
        function postMeme(body: any) {
            return request(server).post("/api/memes").send(body);
        }
        const testMeme = {
            template: {
                url: "https://i.imgflip.com/26am.jpg",
                width: 500,
                height: 437,
                },
            topText: "Funny Top text",
            bottomText: "Witty Bottom",
            name: "Funny title"
        }

        it("should respond with a status 201", async () => {
            const res = await postMeme(testMeme);
            expect(res.status).to.equal(201);
        });

        it("should return a created meme", async () => {
            const res = await postMeme(testMeme);
            const meme: MemeDTO = res.body;

            expect(meme).to.have.property("title");
            expect(meme).to.have.property("uri");
        });
    });

    describe("GET /api/memes", () => {
        function getMemes() {
            return request(server).get("/api/memes");
        }

        it("should respond with a list", async () => {
            const res = await getMemes()

            expect(res.status).to.equal(200);
            expect(res.body).to.be.array();
        });

        it("should respond with at least one meme", async () => {
            const res = await getMemes();
            const firstMeme = res.body[0];

            expect(typeof firstMeme.uri).to.equal("string");
            expect(typeof firstMeme.title).to.equal("string");
        });
    });
})