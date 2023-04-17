class Upload{

    uploadFile(file:File){
        //this.save(file)
        this.progress()
    }
    
    progress(){
        console.log("progress")
    }

    // save(file:File){
    //     console.log("file Uploaded")
    //     return "file saved"
    // }
}

class UploadAws extends Upload{
    override save(file:File){
        console.log("new maethod for loading")
    }
}

const uploadAws = new UploadAws()
const file = new File(["data"], "data.txt", {type: "text/plain"})

uploadAws.uploadFile(file)