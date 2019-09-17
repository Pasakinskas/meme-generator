import { TemplateModel } from "../src/models/templateModel";
import { MemeModel } from "../src/models/memeModel";
import { TemplateService } from "../src/services/templateService";

export class TestUtils {
    static async scrubDatabase() {
        await Promise.all([
            TemplateModel.deleteMany({}),
            MemeModel.deleteMany({}),
        ]);
    }

    static async MockDataForTests() {
        await TestUtils.scrubDatabase();
        await TestUtils.addMockTemplates();
    }

    static async addMockTemplates() {
        const templateService = new TemplateService();
        await Promise.all([
            templateService.saveTemplateWithoutDimentions(
                "That-Would-Be-Great",
                "https://imgflip.com/s/meme/That-Would-Be-Great.jpg"
            ),
            templateService.saveTemplateWithoutDimentions(
                "Oprah-You-Get-A",
                "https://imgflip.com/s/meme/Oprah-You-Get-A.jpg"
            ),
            templateService.saveTemplateWithoutDimentions(
                "Leonardo-Dicaprio-Cheers",
                "https://imgflip.com/s/meme/Leonardo-Dicaprio-Cheers.jpg"
            ),
            templateService.saveTemplateWithoutDimentions(
                "Me-and-the-boys",
                "https://i.imgflip.com/320xfw.jpg"
            ),
        ]);
    }
}