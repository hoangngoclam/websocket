import BaseController from "./base.controller";
import StoryService from "../services/story.service";
const Service = new StoryService();
export default new class StoriesController extends BaseController {
    constructor(){
        super(Service);
    }

    createNew(){
        console.log("inside controller");
        return async (req, res) => {
            try {
                await this.service.createNewStory(req)
                    .then(result => res.status(200).json(result));
            } catch (e) {
                res.status(404).json({error: e.message})
            }
        }
    }

    updateLike() {
        return async (req, res) => {
            try {
                await this.service.updateLike(req.params.id,req.body.userId)
                    .then(result => res.status(200).json(result));
            } catch (e) {
                res.status(404).json({error: e.message})
            }
        }
    }
}