//Problem no:1
class Stack<T>
{
private items:T[]=[];
push(item:T):void
{
this.items.push(item);
console.log(`Push ${item}`)
}
pop():T|undefined
{
console.log(`Pop ${this.items[this.items.length-1]}`);  
return this.items.pop();
}
peek():T|undefined
{
return this.items[this.items.length-1];
}
isEmpty():boolean
{return this.items.length===0;}
display():void
{
    let i=0;
    let tempStack=[...this.items];
    tempStack.reverse();
    while(tempStack.length>0)
    {
        console.log(`Items is:${tempStack.pop()}`);
    }
}
}
const stack=new Stack<number|string>();
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


//Problem no:2

class Queue<T>
{
private queueItems:T[]=[];
enqueue(item:T):void
{
this.queueItems.push(item);
console.log(`Enqueue Item is:${item}`)
}
dequeue():T|undefined
{
   if(this.queueItems.length===0)
    {
        console.log('Queue is Empty');
    }
    else
    {
console.log(`Dequeue Item is:`);
return this.queueItems.shift();

    }
}
peek():T|undefined
{
    if(this.queueItems.length==0)
        {
            console.log('Queue is Empty');
        }
        else
        {
  console.log(`Peek Item is:`);         
  return  this.queueItems[0];  
        }
}
isEmpty():boolean
{
return this.queueItems.length===0;
}
}
const queue = new Queue<string>();
queue.enqueue("a");
queue.enqueue("b");
console.log(queue.peek()); 
console.log(queue.dequeue());  
console.log(queue.dequeue());  
console.log(queue.isEmpty()); 