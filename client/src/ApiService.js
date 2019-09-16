class ApiService {
    async _requestTemplates() {
        const res = await fetch("https://api.imgflip.com/get_memes");
        return await res.json();
    }

    async getTemplates() {
        const json = await this._requestTemplates();
        return json.data.memes;
    }

    async generateMeme(template, name, topText, bottomText) {
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
}

export default new ApiService();