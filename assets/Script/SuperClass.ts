import executeInEditMode = cc._decorator.executeInEditMode;
import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import executionOrder = cc._decorator.executionOrder;

@ccclass
@executeInEditMode
@executionOrder(1)
export class SuperClass extends cc.Component {

    @property(cc.Label)
    public label: cc.Label;

    @property({
        default: "hello"
    })
    public text: string = 'hello';

    public async onLoad() {
        // init logic
        this.label.string = await this.testAsync();
    }

    protected async testAsync(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello, World!");
            }, 1000)
        })
    }
}
