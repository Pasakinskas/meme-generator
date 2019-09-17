class ApiService {
    async getPublicTemplates() {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const json = await res.json();
        return json.data.memes;
    }

    async getTemplates() {
        const res = await fetch("http://localhost:8085/api/templates");
        return await res.json();
    }

    async getMemes() {
        const res = await fetch("http://localhost:8085/api/memes");
        return await res.json();
    }

    async createMeme(template, name, topText, bottomText) {
        const data = JSON.stringify({
            name,
            template,
            topText,
            bottomText
        });
        const res = await fetch("http://localhost:8085/api/memes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
        })

        return await res.json();
    }

    async createTemplate(name, uri) {
        const data = JSON.stringify({
            name,
            uri
        });
        const res = await fetch("http://localhost:8085/api/templates", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
        });

        return await res.json();
    }
}

export default new ApiService();