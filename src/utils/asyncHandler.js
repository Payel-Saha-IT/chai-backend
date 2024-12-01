// const asyncHsmdler=()=>{}
// const asyncHsmdler=(fn)=>{}
// const asyncHsmdler=(fn)=>{()=>{}}
// const asyncHsmdler=(fn)=>()=>{}
// const asyncHsmdler=(fn)=>async ()=>{}


// const asyncHsmdler=(fn)=>
//    async (req,res,next)=>{
//             try{
//                 await fn(req,res,next)
//             }
//             catch(error)
//             {
//                 res.status(error.code||500)
//                 .json({
//                     success:false,
//                     message:error.message
//                 })
//             }
//     }


const asyncHandler=(requestHandler)=>{
        (req,res,next)=>{
            Promise.resolve(requestHandler(req,res,next))
            .catch((err)=>next(err))
        }
}

export {asyncHandler};