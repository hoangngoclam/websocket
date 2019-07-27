import {BaseRepository} from "./base.repository";
import {StoryModel} from "../models/story.model";

export default class StoryRepository extends BaseRepository {

    constructor() {
        super(StoryModel);
    }

    isUserLiked(storyId,userId){
        return new Promise((resolve,reject) => {
            this.model.find({likes:{$in:userId}}).exec()
                .then(data=>{
                    if(data.length)
                        resolve(true);
                    resolve(false);
                })
        })
    }

    updateLikes(storyId,userId){
        return new Promise((resolve,reject) => {
            this.model.update({_id:storyId},{$push:{likes:userId}})
                .then(data=>resolve(data))
                .catch(err=>reject(err))
        })
    }
    
    async getAll() {
        return await this.model.find({}).populate({path: 'author', select: 'username score avatar displayName'});
    };

    async getById(id) {
        return await this.model.findOne({_id: id}).populate({path: 'author', select: 'username score avatar displayName'});
    };

}