export default class BaseController {
    protected service;

    constructor(service) {
        this.service = service;
    }

    create() {
        return async (req, res) => {
            try {
                await this.service.create(req.body)
                    .then(result => res.status(200).json(result));
            } catch (e) {
                res.status(400).json({error: e.message})
            }
        }
    }

    getAll() {
        return async (req, res) => {
            try {
                await this.service.getAll()
                    .then(result => res.status(200).json(result))
            } catch (e) {
                res.status(404).json({error: e.message})
            }
        }
    }

    getById() {
        return async (req, res) => {
            try {
                await this.service.getById(req.params.id)
                    .then(result => res.status(200).json(result));
            } catch (e) {
                res.status(404).json({error: e.message})
            }
        }
    }

    deleteById() {
        return async (req, res) => {
            try {
                await this.service.deleteById(req.params.id)
                    .then(result => res.status(201).json(result))
            } catch (e) {
                res.status(400).json({error: e.message})
            }
        }
    }

    deleteAll() {
        return async (req, res) => {
            try {
                await this.service.deleteAll()
                    .then(result => res.status(201).json(result))
            } catch (e) {
                res.status(400).json({error: e.message})
            }
        }
    }

    updateById() {
        return async (req, res) => {
            try {
                await this.service.updateById(req.params.id, req.body)
                    .then(result => res.status(200).json(result))
            } catch (e) {
                res.status(400).json({error: e.message})
            }
        }
    }
}