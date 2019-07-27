import BaseController from "./base.controller";
import RelationshipService from "../services/relationship.service";

const Service = new RelationshipService();

export default new class RelationshipsController extends BaseController {
    constructor() {
        super(Service);
    }

    getFriendsList() {
        return async (req, res) => {
            try {
                await Service.getFriendsList(req.params.id)
                    .then(result => res.status(200).json(result))
            } catch (e) {
                res.status(400).json({error: e.message})
            }
        }
    }
    getFollowingList(){
        return async (req, res) => {
            try {
                await Service.getFollowingList(req.params.id)
                    .then(result => res.status(200).json(result))
            } catch (e) {
                res.status(400).json({error: e.message})
            }
        }
    }

    create() {
        return async (req, res) => {
            try {
                await Service.create(req.body)
                    .then(result => res.status(200).json(result))
            } catch (e) {
                res.status(400).json({error: e.message})
            }
        }
    }
}