const AC_GAME_OBJECTS = [];

export class AcGameObject {
    constructor() {
        this.has_called_start = false;
        this.timedelta = 0;
        AC_GAME_OBJECTS.push(this);
    }

    start() {

    }

    update() {

    }

    render() {

    }

    on_destory() {

    }

    destory() {
        this.on_destory();
        for (let i in AC_GAME_OBJECTS) {
            obj = AC_GAME_OBJECTS[i];
            if (obj === this) {
                console.log("remove AC GAME OBJECT ... ");
                console.log(obj);
                AC_GAME_OBJECTS.slice(i);
                console.log("remove success");
                break;
            }
        }

    }
}

let last_timestamp;

const step = (timestamp) => {
    for (let obj of AC_GAME_OBJECTS) {
        if (!this.has_called_start) {
            this.start();
            this.has_called_start = true;
        } else {
            this.timedelta = timestamp - last_timestamp;
            this.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(step);
}

requestAnimationFrame(step);