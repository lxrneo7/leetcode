
var MyStack = function() { this.q = []; };
MyStack.prototype.push = function(x) { this.q.push(x); for (let i = 1; i < this.q.length; i++) this.q.push(this.q.shift()); };
MyStack.prototype.pop = function() { return this.q.shift(); };
MyStack.prototype.top = function() { return this.q[0]; };
MyStack.prototype.empty = function() { return this.q.length === 0; };