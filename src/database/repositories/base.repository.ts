export class BaseRepository {
    protected model;

    constructor(model) {
        this.model = model;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.model.find({}, (err, result) => {
                (err) && reject(err);
                resolve(result);
            });
        })
    };

    getById(id) {
        return new Promise((resolve) => {
            this.model.findById(id, (err, result) => {
                (err) && resolve([]);
                resolve(result);
            });
        })
    };

    getByNamePass(userName,password){
        return new Promise((resolve)=>{
            this.model.findOne({username:userName,password:password},(err,result)=>{
                (err) && resolve([]);
                resolve(result);
            })
        })
    }

    create(data) {
        return new Promise((resolve, reject) => {
            const newModel = new this.model(data);
            newModel.save()
                .then((result) => resolve({success: true, data: result}))
                .catch((err) => reject(err));
        })
    };

    deleteById(id) {
        return new Promise((resolve, reject) => {
            this.model.deleteOne({_id: id}, (err) => {
                (err) && reject(err);
                resolve({success: true})
            })
        })
    };

    deleteAll() {
        return new Promise((resolve, reject) => {
            this.model.remove({}, (err) => {
                (err) && reject(err);
                resolve({success: true})
            })
        })
    }

    updateById(id, data) {
        return new Promise((resolve, reject) => {
            this.model.updateOne({_id: id}, data, (err) => {
                (err) && reject(err);
                resolve({success: true});
            })
        })
    }

}