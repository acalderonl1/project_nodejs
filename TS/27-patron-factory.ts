interface IUpload {
    save(file: File): void
}

class FactoryUploadAWS implements IUpload {
    save(file: File): void {
        this.startProgress()
        setTimeout(() => this.endProgress(), 2000)
    }

    startProgress() {
        console.log("Uploadinf File To AWS")
    }

    endProgress() {
        console.log("File uploaded")
    }
}

class FactoryUploadAzuere implements IUpload {
    save(file: File): void {
        this.progress()
    }

    progress() {
        console.log("File uploaded to azure")
    }
}

class FactoryUploadGCP implements IUpload {
    save(file: File): void {
        this.progress()
    }

    progress() {
        console.log("File uploaded to GCP")
    }
}

function uploadFile(cloud: string) {
    let upload
    switch (cloud) {
        case "AWS":
            upload = new FactoryUploadAWS()
            break;
        case "GCP":
            upload = new FactoryUploadGCP()
            break;
        case "Azur":
            upload = new FactoryUploadAzuere()
            break;
        default:
            upload = new FactoryUploadAWS()
            break;
    }
    
    return upload
}

const upload = uploadFile("GCP") //new FactoryUploadGCP()//FactoryUploadAWS()
const file = new File(["data"], "data.txt", { type: "text/plain" })
upload.save(file)
