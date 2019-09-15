class ApiService {
    async _requestTemplates() {
        const res = await fetch("https://api.imgflip.com/get_memes");
        return await res.json();
    }

    async getTemplates() {
        const json = await this._requestTemplates();
        return json.data.memes;
    }
}

export default new ApiService();