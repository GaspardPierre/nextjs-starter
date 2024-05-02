import Flagsmith from "flagsmith-nodejs/build/sdk";

const flagsmith = new Flagsmith({
    environmentKey: process.env.FLAGSMITH_KEY as string,
    requestTimeoutSeconds: 60

})

export default flagsmith