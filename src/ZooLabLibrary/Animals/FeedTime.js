import ZooKeeper from '../Employees/ZooKeeper.js'

export default class FeedTime {

    #FeedTime
    #FeedByZooKeeper

    constructor({
                    feedTime,
                    zooKeeper,
                }) {
        if (feedTime instanceof Date && zooKeeper instanceof ZooKeeper){
            this.#FeedTime = feedTime
            this.#FeedByZooKeeper = zooKeeper
        }

    }

    get feedTime() {
        return this.#FeedTime;
    }

    set feedTime(feedTime) {
        if (feedTime instanceof Date)
            this.#FeedTime = feedTime;
    }

    get feedByZooKeeper() {
        return this.#FeedByZooKeeper;
    }

    set feedByZooKeeper(zooKeeper) {
        if (zooKeeper instanceof ZooKeeper)
        this.#FeedByZooKeeper = zooKeeper;
    }
}
