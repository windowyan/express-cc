let http=require('http')
let url=require('url')

let router=[
    {
        path:'*',method:'*',handler(req,res){
            res.end(`Cannot ${req.url} ${req.method}`)
        }
    }
]

class Application{

    get(path,handler){
        router.push({
            path,
            method:'get',
            handler
        })
    }
    listen(){
        let server=http.createServer((req,res)=>{
            console.log(req)
            console.log(req.url)
            console.log(url.parse(req.url))
            let {pathname}=url.parse(req.url)
            for(let i=1;i<router.length;i++){
                let {path,method,handler}=router[i]
                if(path===pathname&&method===req.method.toLocaleLowerCase()){
                    return handler(req,res)
                }
            }
            return router[0].handler(req,res)
            
        })
        server.listen(...arguments)
    }
}

module.exports=Application