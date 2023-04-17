interface IUpload{
    save(file : File): void

}

class UploadAWS implements IUpload {
    save(file: File): void {
        this.progress(file)
        console.log("file uploaded")
    }

    private progress(file: File){
        console.log("file is uploading")
    }
}

class UploadGCP implements IUpload{
    save(file : File): void{
        this.status(file)
        this.sentNotification()    
    }

    private status(file: File){
        console.log("File is uploading")
    }

    private sentNotification(){
        console.log("File Uploaded")
    }
}

const upload: IUpload = new UploadGCP()
const file = new File(["data"], "data.txt", {type: "text/plain"})
upload.save(file)  