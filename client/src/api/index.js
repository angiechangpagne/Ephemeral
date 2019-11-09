import request from 'superagent'

export function apiGetAllNews(cb){
    request.get(`/viewNews`)
    .end((err,res) => {
        if(err) {
            cb(err.message)
            return
        }
        const result=res.body
        cb(null,result)
    }) 
}


export function apiViewNewsArticle(id, cb){
    request.get(`/news/${id}`)
    .end((err,rest) => {
        if(err){
            cb(err.message)
            return
        }
        const result=res.body
        cb(null,result)
    })
}


export function apiPostArticle(obj,cb){
    request.post(`/login`)
    .send(obj)
    .end((err,res) => {
        if(err) cb(err)
        const result=res.body.articleId
        cb(null,result)
    })
}


//Post star/favorite/ML

export function apiCheckLogin(obj,cb){
    request.post(`/login`)
    .send(obj)
    .end((err,res) =>{
        if(err) console.log("this error",err)
        const result=res.body
        console.log(res)
        cb(null,result)
    } )
}

//we will check and authenticate login on frontend components folder