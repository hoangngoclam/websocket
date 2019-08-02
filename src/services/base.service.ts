export default class BaseService {
    protected Repository;

    constructor(repository) {
        this.Repository = repository;
    }

    async create(item) {
        try {
            return await this.Repository.create(item)
        } catch (e) {
            throw new Error(e)
        }
    }

    async getAll() {
        try {
            return await this.Repository.getAll()
        } catch (e) {
            throw new Error(e)
        }
    }

    async getById(id) {
        try {
            return await this.Repository.getById(id);
        } catch (e) {
            throw new Error(e)
        }
    }

    async deleteById(id) {
        try {
            return await this.Repository.deleteById(id)
        } catch (e) {
            throw new Error(e)
        }
    }

    async deleteAll() {
        try {
            return await this.Repository.deleteAll()
        } catch (e) {
            throw new Error(e)
        }
    }

    async updateById(id, data) {
        try {
            return await this.Repository.updateById(id, data)
        } catch (e) {
            throw new Error(e)
        }
    }
}