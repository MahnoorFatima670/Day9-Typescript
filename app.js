var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
        console.log("Push ".concat(item));
    };
    Stack.prototype.pop = function () {
        console.log("Pop ".concat(this.items[this.items.length - 1]));
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () { return this.items.length === 0; };
    Stack.prototype.display = function () {
        var i = 0;
        var tempStack = __spreadArray([], this.items, true);
        tempStack.reverse();
        while (tempStack.length > 0) {
            console.log("Items is:".concat(tempStack.pop()));
        }
    };
    return Stack;
}());
var stack = new Stack();
stack.display();
stack.push(9);
stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(14);
stack.display();
stack.pop();
stack.pop();
stack.display();
var Queue = /** @class */ (function () {
    function Queue() {
        this.queueItems = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.queueItems.push(item);
        console.log("Enqueue Item is:".concat(item));
    };
    Queue.prototype.dequeue = function () {
        if (this.queueItems.length === 0) {
            console.log('Queue is Empty');
        }
        else {
            console.log("Dequeue Item is:");
            return this.queueItems.shift();
        }
    };
    Queue.prototype.peek = function () {
        if (this.queueItems.length == 0) {
            console.log('Queue is Empty');
        }
        else {
            console.log("Peek Item is:");
            return this.queueItems[0];
        }
    };
    Queue.prototype.isEmpty = function () {
        return this.queueItems.length === 0;
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
