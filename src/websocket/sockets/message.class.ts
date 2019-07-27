class Message{

    constructor(){
    }

    getErrorMessage(message:string="something"){
        return JSON.stringify({type:"ERROR",message:message})
    }

    getSuccessMessage(message:string="something"){
        return JSON.stringify({type:"SUCCESS",message:message})
    }

    getDefaultMessage(message:string="something"){
        return JSON.stringify({type:"MESSAGE",message:message})
    }

    getUserMessage(message:string="something"){
        return JSON.stringify({type:"USER",message:message})
    }
}
export default Message