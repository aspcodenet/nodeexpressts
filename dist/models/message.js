"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMessages = void 0;
var Message = /** @class */ (function () {
    function Message(text, user) {
        this.text = text;
        this.user = user;
    }
    Message.prototype.getSalary = function () {
        return 10000;
    };
    return Message;
}());
function getAllMessages() {
    var result = [
        new Message("Tjena moss", "Kalle"),
        new Message("Tjena moss2", "Kalle2"),
        new Message("Tjena moss3", "Kalle3")
    ];
    return result;
}
exports.getAllMessages = getAllMessages;
// export{
//     Message ,
//     getAllMessages
// }
