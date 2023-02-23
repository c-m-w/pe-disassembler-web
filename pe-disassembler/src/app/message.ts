/// message.ts

import getTime from "./getTime";

export default class Message {
    
    public static M_INFO = 0;
    public static M_SUCCESS = 1;
    public static M_ERROR = 2;

    public type: number;
    public message: string;
    public time: number;
    public waning: boolean;

    constructor(type: number, message: string) {

        this.type = type;
        this.message = message;
        this.time = getTime();
        this.waning = false;
    }
}
