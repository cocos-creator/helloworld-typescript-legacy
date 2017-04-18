import ccclass = cc._decorator.ccclass;
import {SuperClass} from "./SuperClass";
@ccclass
export class ChildClass extends SuperClass {
    protected async testAsync(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello, World! From ChildClass!");
            }, 1000);
        });
    }
}