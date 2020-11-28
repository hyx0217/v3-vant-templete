/* const arr = [
  // v0  v1  v2  v3  v4
     0,  0,  1,  1,  0, // v0
     0,  0,  0,  1,  1, // v1
     1,  0,  0,  1,  1, // v2
     1,  1,  1,  0,  0, // v3
     0,  1,  1,  0,  0, // v4
  ] */
  class Adjoin {
    constructor(vertex) {
      this.vertex = vertex;
      this.quantity = vertex.length;
      this.init();
    }
  
    init() {
      this.adjoinArray = Array.from({ length: this.quantity * this.quantity });
    }
  
    getVertexRow(id) {
      const index = this.vertex.indexOf(id);
      const col = [];
      this.vertex.forEach((item, pIndex) => {
        col.push(this.adjoinArray[index + this.quantity * pIndex]);
      });
      return col;
    }
  
    getAdjoinVertexs(id) {
      return this.getVertexRow(id).map((item, index) => (item ? this.vertex[index] : '')).filter(Boolean);
    }
  
    setAdjoinVertexs(id, sides) {
      const pIndex = this.vertex.indexOf(id);
      sides.forEach((item) => {
        const index = this.vertex.indexOf(item);
        this.adjoinArray[pIndex * this.quantity + index] = 1;
      });
    }
  }
  
  // 创建矩阵
const demo = new Adjoin(['v0', 'v1', 'v2', 'v3', 'v4'])
  console.log(demo)
  
  // 注册邻接点
  demo.setAdjoinVertexs('v0', ['v2', 'v3']);
  demo.setAdjoinVertexs('v1', ['v3', 'v4']);
  demo.setAdjoinVertexs('v2', ['v0', 'v3', 'v4']);
  demo.setAdjoinVertexs('v3', ['v0', 'v1', 'v2']);
  demo.setAdjoinVertexs('v4', ['v1', 'v2']);
  
  // 打印
  console.log(demo.getAdjoinVertexs('v0'));
  // ['v2', 'v3']