import BaseService from "./base.service";
import StoryRepository from "../database/repositories/story.repository";
import UploadFileService from "./uploadFile.service";

const Repository = new StoryRepository();

export default class StoryService extends BaseService {
    constructor() {
        super(Repository)
    }
    async createNewStory(request){
        let uploadFileService = new UploadFileService();
        let jsonUploadFile = await uploadFileService.uploadFile('photo',request);
        let postUrl = jsonUploadFile.data.imageUrl;
        return  new Promise((resolve, reject) => {
            let dataInput = request.body;
            dataInput.photo = postUrl;
            this.create(dataInput).then(data=>{resolve(data)})
                .catch(err=>reject(err))
        })
    }
    async updateLike(storyId, userId) {
        let isLiked = await Repository.isUserLiked(storyId,userId);
        return new Promise((resolve, reject) => {
            if (!isLiked){
                resolve(Repository.updateLikes(storyId,userId));
            }
            else{
                reject({success:false})
            }
        })
    }
}