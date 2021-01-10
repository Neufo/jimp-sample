import Jimp from "jimp";

Jimp.read(__dirname + "/hoo.png").then(
    async (value) => {
        await value.resize(200, 200).writeAsync(__dirname + "/resized.png");
    },
    (err) => {
        console.log(err);
    }
);
